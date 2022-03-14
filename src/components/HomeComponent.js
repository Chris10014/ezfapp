import React from 'react'
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";
import { serverUrl } from "../shared/serverUrl";

function RenderCard({item, isLoading, errMess}) { 
  console.log(isLoading)
    if (isLoading) {
        return(
            <Loading text="Wird geladen ..." />
        );
    }
    else if (errMess) {
        return(
           console.log("errMess")
        );
    }
    else {
      return (
        <div>
          {item.start}
        </div>
      );
     
    }
   
}

export const Home = ({ datesLoading, dates, datesHasError, datesErrMsg }) => {
  console.log("Loading: ", datesLoading);
  console.log("Dates: ", dates);
  console.log("Has Error: ", datesHasError);
  console.log("ErrorMsg: ", datesHasError ? datesErrMsg : null);


  return (
    <div className="container">
      <h1 className="mt-3 mb-2 text-center">HomeComponent</h1>
      <hr />
      <h1>Hello this is Home Component</h1>
      {datesLoading ? <Loading text="Veranstaltung wird geladen ..." /> : null}
      {datesHasError ? <h4>{datesErrMsg}</h4> : null}
      {dates ? dates.data.map((date) => {
        if(date){
        return date.start
      } else {
        //nothing
      }
    }) : null
    }
    </div>
  );
};
