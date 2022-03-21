import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from "react-router-dom"

export const Participants = () => {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Teilnehmer</BreadcrumbItem>
      </Breadcrumb>
      <header>
        <h1 className="mt-3 mb-2 text-center">Teilnehmerliste</h1>
        <hr />
      </header>
    </div>
  );
}