import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Form, Row, FormLabel } from "react-bootstrap";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputError from "./InputErrorComponent";
import Loader from "./LoaderComponent";

const RegisterForm = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      hideLastName: false,
      email: "",
      gender: "",
      yearOfBirth: "1960",
      team: "",
      estimatedFinishTime: "00:00:00",
      acceptTermsAndConditions: false,
      acceptRaceInfo: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, "Maximal 15 Buchstaben").required("Vorname angeben"),
      lastName: Yup.string().max(20, "Maximal 15 Buchstaben").required("Nachname angeben"),
      email: Yup.string().email("Ungültige E-Mail Adresse").required("E-Mail Adresse angeben"),
      gender: Yup.string().required("Geschlecht angeben"),
      yearOfBirth: Yup.number()
        .min(1900, "Geburtsjahr prüfen")
        .max(new Date().getFullYear() - 15, "Geburtsjahr prüfen")
        .required("Geburtsjahr angeben"),
      team: Yup.string().min(5, "Teamname muss mindestens aus 5 Buchstaben bestehen"),
      estimatedFinishTime: Yup.string(),
      acceptTermsAndConditions: Yup.boolean(true, "Verzichtserklärung und Haftungsfreistellung akzeptieren"),
      acceptRaceInfo: Yup.boolean(true, "Infounterlage zur Kenntnis nehmen"),
    }),
    onSubmit: (values, {resetForm}) => {
      if(values.team && values.team.length > 4) {
        const teamExist = props.teams?.data.filter((team) => team.name.toLowerCase() === values.team.toLowerCase())[0];
        if (teamExist) {
          var teamId = teamExist._id
          values.team = teamId
        } else {
          //post team to db and retrieve _id = values.team
        }
      }
        
      alert(JSON.stringify(values));
      //post data to participants collection
      resetForm({values: ""}); //to empty form after submit
    },
  });

  console.log( "Loading: ", props.teamsLoading + " Err: ", props.teamsErr + " ErrMsg: ", props.teamsErrMsg + " Teams: ", props.teams?.data);

  return (
    <div>
      <h1 className="mt-3 mb-2 text-center">Anmeldung</h1>
      <hr />
      
      <Form onSubmit={formik.handleSubmit}>
        <div className="container">
          <Row className="form-group mb-2">
            <div className="col-md-2">
              <FormLabel htmlFor="firstName">Vorname:{"\u00A0"}*</FormLabel>
            </div>
            <div className="col-md-6">
              <input id="firstName" className="form-control" name="firstName" type="text" placeholder="Vorname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
              {formik.touched.firstName && formik.errors.firstName ? <InputError message={formik.errors.firstName} type="warning" /> : null}
            </div>
          </Row>
          <Row className="form-group mb-2">
            <div className="col-md-2">
              <FormLabel>Nachname:{"\u00A0"}*</FormLabel>
            </div>
            <div className="col-md-6">
              <input id="lastName" className="form-control" name="lastName" type="text" placeholder="Nachname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
              {formik.touched.lastName && formik.errors.lastName ? <InputError message={formik.errors.lastName} type="warning" /> : null}
            </div>
          </Row>
          <Row className="form-group mb-2">
            <div className="offset-md-2">
              <div class="form-check">
                <input type="checkbox" className="form-check-input" name="hideLastName" id="hideLastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value="hideLastName" />
                {"\u00A0"}
                <FormLabel className="col-md-6" htmlFor="hideLastName">
                  Meinen Nachnamen in den Teilnehmer- und Ergebnislisten NICHT anzeigen.
                </FormLabel>
              </div>
            </div>
          </Row>
          <Row className="form-group mb-2">
            <div className="col-md-2">
              <FormLabel htmlFor="male">Geschlecht:{"\u00A0"}*</FormLabel>
            </div>
            <div className="col-md-6">
              <FormLabel htmlFor="male">
                m {"\u00A0"}
                <FontAwesomeIcon icon="fa-mars" />
                {"\u00A0"}
              </FormLabel>
              <input id="male" type="radio" value="male" name="gender" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultChecked={formik.values.gender === "male"} />
              {"\u00A0"}|{"\u00A0"}
              <FormLabel htmlFor="female">
                w {"\u00A0"}
                <FontAwesomeIcon icon="fa-venus" />
                {"\u00A0"}
              </FormLabel>
              <input id="female" type="radio" value="female" name="gender" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultChecked={formik.values.gender === "female"} />
              {"\u00A0"}|{"\u00A0"}
              <FormLabel htmlFor="diverse">
                d {"\u00A0"}
                <FontAwesomeIcon icon="fa-genderless" />
                {"\u00A0"}
              </FormLabel>
              <input id="diverse" type="radio" value="diverse" name="gender" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultChecked={formik.values.gender === "diverse"} />
            </div>
            <span className="offset-2">{formik.touched.gender && formik.errors.gender ? <InputError message={formik.errors.gender} type="warning" /> : null}</span>
          </Row>

          <Row className="form-group mb-2">
            <div className="col-md-2">
              <FormLabel htmlFor="yearOfBirth">Jahrgang:{"\u00A0"}*</FormLabel>
            </div>
            <div className="col-md-2">
              <input id="yearOfBirth" className="form-control" name="yearOfBirth" type="number" placeholder="Geburtsjahr" min="1950" max={new Date().getFullYear() - 15} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.yearOfBirth} />
            </div>
            <span className="offset-2">{formik.touched.yearOfBirth && formik.errors.yearOfBirth ? <InputError message={formik.errors.yearOfBirth} type="warning" /> : null}</span>
          </Row>
          <Row className="form-group mb-2">
            <div className="col-md-2">
              <FormLabel>E-Mail: *</FormLabel>
            </div>
            <div className="col-md-6">
              <input id="email" className="form-control" name="email" type="email" placeholder="meine@email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
              {formik.touched.email && formik.errors.email ? <InputError message={formik.errors.email} type="warning" /> : null}
            </div>
          </Row>
          <Row className="form-group mb-2">
            <div className="col-md-2">
              <FormLabel htmlFor="team">Team: </FormLabel>
            </div>
            <div className="col-md-6">
              <input id="team" className="form-control" name="team" type="text" placeholder="Mein Team" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.team} list="teams-list" />
              {formik.touched.team && formik.errors.team ? <InputError message={formik.errors.team} type="warning" /> : null}
            </div>
            <datalist id="teams-list">
              {props.teams?.data.map((team) => {
                return <option value={team.name}>{team.name}</option>
              })}              
            </datalist>
          </Row>
          <Row className="form-group mb-2">
            <div className="col-md-2">
              <FormLabel htmlFor="estimatedFinishTime">Zielzeit: </FormLabel>
            </div>
            <div className="col-md-6">
              <input id="estimatedFinishTime" className="form-control" name="estimatedFinishTime" type="time" step="1" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.estimatedFinishTime} />
              {formik.touched.estimatedFinishTime && formik.errors.estimatedFinishTime ? <InputError message={formik.errors.estimatedFinishTime} type="warning" /> : null}
            </div>
          </Row>
          <Row className="form-group mb-2">
            <div className="offset-md-2 mt-3">
              <div class="form-check">
                <input type="checkbox" className="form-check-input" id="acceptTermsAndConditions" name="acceptTermsAndConditions" onChange={formik.handleChange} onBlur={formik.handleBlur} value="acceptTermsAndConditions" required />
                {"\u00A0"}
                <FormLabel className="col-md-6" htmlFor="acceptTermsAndConditions">
                  Ich habe die Verzichtserklärung und Haftungsfreistellung gelesen und akzeptiert.{"\u00A0"}*
                </FormLabel>
                {formik.touched.acceptTermsAndConditions && formik.errors.acceptTermsAndConditions ? <InputError message={formik.errors.acceptTermsAndConditions} type="warning" /> : null}
              </div>
            </div>
          </Row>
          <Row className="form-group mb-2">
            <div className="offset-md-2">
              <div class="form-check">
                <input type="checkbox" className="form-check-input" name="acceptRaceInfo" id="acceptRaceInfo" onChange={formik.handleChange} onBlur={formik.handleBlur} value="acceptRaceInfo" required />
                {"\u00A0"}
                <FormLabel className="col-md-6" htmlFor="acceptRaceInfo">
                  Ich habe die Infounterlage gelesen und bin mit den Gefahrenhinweisen vertraut.
                  <p>Ich bin damit einverstanden, dass die von mir zu Anmeldung angegeben Daten gespeichert werden. Sie werden alleine zur Durchführung, Auswertung und Ergebnisdarstellung des Einzelzeitfahren Training genutzt. In diesem Rahmen werden Namen und erreichte Zeit veröffentlicht. Es werden keine Daten an unbefugte Dritte weitergegeben.{"\u00A0"}*</p>
                </FormLabel>
                {formik.touched.acceptRaceInfo && formik.errors.acceptRaceInfo ? <InputError message={formik.errors.acceptRaceInfo} type="warning" /> : null}
              </div>
            </div>
          </Row>
        </div>
        <div className="offset-2 mb-2 text-muted small">* Pflichtangaben</div>
        <div className="offset-2 mb-3">
          <input type="submit" class="col-md-auto btn btn-success" name="send" value="Weiter" />
          {"\u00A0"}
          {"\u00A0"}
          <input type="reset" class="col-md-auto btn btn-danger" name="cancel" value="Abbrechen" />
        </div>
      </Form>
    </div>
  );
}

export default RegisterForm