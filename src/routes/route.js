import express from "express";
import testRoute from "./tests/test.route.js";
import patientRoute from "./patient/patient.route.js";
const route = express.Router();


route.use("/tests", testRoute);
route.use("/patients", patientRoute);

export default route;
