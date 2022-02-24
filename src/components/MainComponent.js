import React from 'react'
import RegisterForm from './RegisterFormComponent'
//react-query
import { useQuery } from "react-query";
import axios from "axios";
import { serverUrl } from '../shared/serverUrl';

const fetchTeams = () => {
  return axios.get(serverUrl + "teams");
}; 

const Main = () => {

  const { isLoading, data, isError, error } = useQuery("teams-list", fetchTeams);
 
  return (
    <div>
        <RegisterForm 
        teamsLoading = {isLoading}
        teamsErr = {isError}
        teamsErrMsg = {error}
        teams={data}
        />
    </div>
  )
}

export default Main