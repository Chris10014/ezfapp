import * as Yup from "yup";

export const registerFormSchema = Yup.object({
      firstName: Yup.string().max(15, "Maximal 15 Buchstaben").required("Vorname angeben"),
      lastName: Yup.string().max(20, "Maximal 15 Buchstaben").required("Nachname angeben"),
      email: Yup.string().email("Ungültige E-Mail Adresse").required("E-Mail Adresse angeben"),
      gender: Yup.string().required("Geschlecht angeben"),
      yearOfBirth: Yup.number()
        .min(1900, "Geburtsjahr prüfen")
        .max(new Date().getFullYear() - 15, "Geburtsjahr prüfen")
        .required("Geburtsjahr angeben"),
      team: Yup.string().nullable().min(5, "Teamname muss mindestens aus 5 Buchstaben bestehen"),
      estimatedFinishTime: Yup.string(),
      acceptTermsAndConditions: Yup.boolean(true, "Verzichtserklärung und Haftungsfreistellung akzeptieren"),
      acceptRaceInfo: Yup.boolean(true, "Infounterlage zur Kenntnis nehmen")
});

export const validateRegisterForm = (req, res) => {
    const formData = req.body;
    registerFormSchema
    .validate(formData)
    .catch(err => {
        res.status(422).dens();
        console.log(err.errors);
    })
    .then(valid => {
        console.log("Form data is valid.");
    });
};
