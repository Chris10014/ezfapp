import React from "react";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loading = (props) => {
    return (
      <div className="col-12">
        <FontAwesomeIcon icon="person-biking" className="fa-beat" color="#bbb" size="5x" />
        {"\u00A0"}
        {"\u00A0"}
        <h6>{props.text ? props.text : "Inhalte werden geladen ..."}</h6>
      </div>
    );
};

// export default Loading;