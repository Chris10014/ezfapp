import React from 'react'
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";
import { serverUrl } from "../shared/serverUrl";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RenderRegCard({eventDate}) {
  return (
    <div key={eventDate._id} className="col-12 col-md-6 col-lg-4">
      <Card className="h-100 text-white bg-dark">
        <CardImg src={serverUrl + "/assets/images/1zf-app/registerTile_small.png"} />
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

export const Home = (props) => {
  console.log("from HomeComponent props: 1. Loading: " + props.eventDatesLoading + " 2. dates: ", props.eventDates + " 3. hasErr: " + props.eventDatesHasError + " 4. errMsg: " + props.eventDatesErrMsg);

  const filteredEvent = props.eventDates?.data.map((eventDate) => {
    if (eventDate && eventDate.sportEvent.name === "1nzelzeitfahren") {
      return <RenderRegCard eventDate={eventDate} />;
    } else {
      return null;
    }
  });

  return (
    <div className="container">
      <h1 className="mt-3 mb-2 text-center">TSG Eppstein 1nzelzeitfahren</h1>
      <hr />
      {props.eventDatesLoading ? (
        <div className="container">
          <Loading text="Veranstaltung wird geladen ..." />
        </div>
      ) : props.eventDatesHasError ? (
        <h4>{props.eventDatesErrMsg}</h4>
      ) : filteredEvent.length !== 0 ? (
       
        filteredEvent
      
      ) : (
        <div className="container">
          <div className="row col-12 text-center">
            <h6>
              Die Suche ergab leider kein Ergebnis.&nbsp;&nbsp;
              <FontAwesomeIcon icon="sad-tear" color="#bbb" size="lg" />
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};
