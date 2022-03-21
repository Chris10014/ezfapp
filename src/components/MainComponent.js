import React from 'react'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import RegisterForm from './RegisterFormComponent';
import {Home} from "./HomeComponent";
import {Footer} from "./FooterComponent";
import {Header} from "./HeaderComponent";
import {RaceInformation} from "./RaceInformationComponent"
import { Privacy } from "./PrivacyComponent";
import { Contact } from './ContactComponent';
import { Results } from './ResultsComponent';
import { Participants } from './ParticipantsComponent';


//react-query
import { useQuery } from "react-query";
import axios from "axios";
import { serverUrl } from '../shared/serverUrl';

const fetchTeams = () => {
  return axios.get(serverUrl + "teams");
}; 
const fetchDates = () => {
  return axios.get(serverUrl + "dates");
}; 

const Main = () => {

  const teams = useQuery("teams-list", fetchTeams);
  const eventDates = useQuery("eventDates-list", fetchDates);

  console.log("from MainComponent dates: ", eventDates)
  console.log("from MainComponent teams: ", teams);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={() => <Home eventDates={eventDates.data} eventDatesLoading={eventDates.isLoading} eventDatesHasError={eventDates.isError} eventDatesErrMsg={eventDates.error} eventDateToRegister={eventDates.data?.data.filter((eventDate) => eventDate.regOpen)[0]} />} />
        <Route exact path="/registerForm" component={() => <RegisterForm eventDateToRegister={eventDates.data?.data.filter((eventDate) => eventDate.regOpen)[0]} teamsLoading={teams.isLoading} teamsHasErr={teams.isError} teamsErrMsg={teams.error} teams={teams.data} />} />
        <Route
          path="/raceInformation"
          component={() => (
            <RaceInformation
              eventDate={
                eventDates.data?.data.filter(
                  (eventDate) =>
                    new Intl.DateTimeFormat("de-DE", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(eventDate.start))) >=
                    new Intl.DateTimeFormat("de-DE", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date())
                )[0]
              }
            />
          )}
        />
        <Route path="/participants" component={() => <Participants />} />
        <Route path="/results" component={() => <Results />} />
        <Route path="/privacy" component={() => <Privacy />} />
        <Route path="/contact" component={() => <Contact />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(Main);