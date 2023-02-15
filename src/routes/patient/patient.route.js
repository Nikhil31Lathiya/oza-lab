import  express  from "express";
import {createPatient,deletePatient,getPatient,getPatients,updatepatient} from "../../services/patient/index.js";

const patientRoute = express.Router();

patientRoute.get('/',(req ,res)=> getPatients(req,res)); 
patientRoute.get('/:id',(req,res)=> getPatient(req,res));
patientRoute.post('/',(req,res)=>createPatient(req,res));
patientRoute.delete('/:id',(req,res)=>deletePatient(req,res));
patientRoute.patch('/:id',(req,res)=>updatepatient(req,res));

export default patientRoute;