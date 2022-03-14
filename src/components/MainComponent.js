import React from 'react'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import RegisterForm from './RegisterFormComponent';
import {Home} from "./HomeComponent";

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
  const dates = useQuery("dates-list", fetchDates);
 
  return (
    <div>
      <Switch>
        <Route path="/home" component={() => <Home dates={dates.data} datesLoading={dates.isLoading} datesHasError={dates.isError} datesErrMsg={dates.error} />} />
        <Route exact path="/registerForm" component={() => <RegisterForm teamsLoading={teams.isLoading} teamsErr={teams.isError} teamsErrMsg={teams.error} teams={teams.data} />}/>
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default withRouter(Main);