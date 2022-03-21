import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Results = () => {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Ergebnisse</BreadcrumbItem>
      </Breadcrumb>
      <h1 className="mt-3 mb-2 text-center">Ergebnisse</h1>
      <hr />
    </div>
  );
}