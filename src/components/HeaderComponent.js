import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { serverUrl } from "../shared/serverUrl";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <div class="text-center" id="headprint">
        <img src={serverUrl + "assets/1zf/img/racelogos/1zFSchriftzugGeradeTraining_white-min.svg"} alt="1zF" width-max="100%" />
      </div>
      <div>
        <Navbar className="navbar navbar-dark bg-dark sticky-top mb-3" expand="md">
          <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
          <NavbarBrand className="mr-auto" href="/home">
            <img src={serverUrl + "assets/1zf/img/racelogos/1zf_Logo_ws_rubberstamp.png"} height="30" width="41" alt="1zF" />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  {" "}
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/registerForm">
                  {" "}
                  Anmeldung
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/raceInformation">
                  {" "}
                  Infos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/participants">
                  {" "}
                  Teilnehmer
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/results">
                  {" "}
                  Ergebnisse
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};
