import React from 'react'
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";
import { serverUrl } from "../shared/serverUrl";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, BreadcrumbItem, Row } from 'react-bootstrap';

function RenderRegCard({eventDate}) {
  return (
    <div key={eventDate._id} className="col-12 col-md-6 col-lg-4">
      <Card className="h-100 text-white bg-dark">
        <CardBody>
          <Link className="text-decoration-none text-white" to={`/registerForm`} /*link to the sportEvent details */>
            <CardImgOverlay>
              <CardTitle>                
                  <h6 className="">
                    <div className="row">
                      <span className="col-10">
                        {}
                        {eventDate.start
                          ? new Intl.DateTimeFormat("de-DE", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            }).format(new Date(Date.parse(eventDate.start)))
                          : "nicht terminiert"}
                        {eventDate.end && eventDate.start && eventDate.end !== eventDate.start ? (
                          <span>
                            {" "}
                            -{" "}
                            {new Intl.DateTimeFormat("de-DE", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            }).format(new Date(Date.parse(eventDate.end)))}
                          </span>
                        ) : null}
                        {/*renders sportEvent.end only if itself and sportEvent.start exist and != null */}
                      </span>
                    </div>
                    {/* / .row */}
                  </h6>              
              </CardTitle>
            </CardImgOverlay>
            <CardText>
              <h6 className="mt-2 text-muted">Anmeldung</h6>
              
              <ul className="list-unstyled">
                {eventDate.races.map((race) => {
                  return <li key={race._id}>{race.name}</li>;
                })}
              </ul>
            </CardText>
          </Link>
        </CardBody>
      </Card>
    </div> /** /key=sportEvent.id */
  );
}

export const Home = ({eventDates, eventDatesLoading, eventDatesHasError, eventDatesErrMsg, eventDateToRegister}) => {
  console.log("from HomeComponent props: 1. Loading: " + eventDatesLoading + " 2. dates: ", eventDates + " 3. hasErr: " + eventDatesHasError + " 4. errMsg: " + eventDatesErrMsg);

  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <div className="col-12 col-md-6 mb-2">
          <Card className="h-100 text-white bg-dark">
            <CardBody className="text-center">
              {eventDateToRegister ? (
                <Link className="text-decoration-none text-white" to={`/registerForm`} /*link to the sportEvent details */>
                  <FontAwesomeIcon className="mb-3" icon="fa-clipboard-list" size="4x" />
                  <div>
                    Anmeldung für{" "}
                    {new Intl.DateTimeFormat("de-DE", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(eventDateToRegister.start)))}
                  </div>
                </Link>
              ) : (
                <>
                  <FontAwesomeIcon className="mb-3" icon="fa-clipboard-list" size="4x" />
                  <div>Anmeldung zur Zeit nicht möglich.</div>
                </>
              )}
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-6 mb-2">
          <Card className="h-100 text-white bg-dark">
            <CardBody className="text-center">
              <Link className="text-decoration-none text-white" to={`/raceInformation`} /*link to the sportEvent details */>
                <FontAwesomeIcon className="mb-3" icon="fa-circle-info" size="4x" />
                <div className="text-center">Infos</div>
              </Link>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-6">
          <Card className="h-100 text-white bg-dark">
            <CardBody className="text-center">
              <Link className="text-decoration-none text-white" to={`/participants`} /*link to the sportEvent details */>
                <FontAwesomeIcon className="mb-3" icon="fa-rectangle-list" size="4x" />
                <div className="text-center">Teilnehmer</div>
              </Link>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-6">
          <Card className="h-100 text-white bg-dark">
            <CardBody className="text-center">
              <Link className="text-decoration-none text-white" to={`/results`} /*link to the sportEvent details */>
                <FontAwesomeIcon className="mb-3" icon="fa-medal" size="4x" />
                <div className="text-center">Ergebnisse</div>
              </Link>
            </CardBody>
          </Card>
        </div>
      </Row>
    </div>
  );
};
