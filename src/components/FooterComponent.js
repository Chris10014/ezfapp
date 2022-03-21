import React from "react";
import { serverUrl } from "../shared/serverUrl";

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div>
          <hr />
        <section className="no-margin-bottom">
          <nav className="no-margin-bottom navbar navbar-expand-md navbar-dark">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <img src={serverUrl + "assets/1zF/img/racelogos/Logo_final_wappen_senkrecht_rubberstamp_ws.svg"} width="5%" alt="TSG Eppstein Triathlon" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Kontakt
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" #">
                  Impressum
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/privacy">
                  Datenschutz
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  );
};