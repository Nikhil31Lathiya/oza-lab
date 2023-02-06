import PatientRepository from "../../domain/patient/patient.repo.js";
import {createPatientSchema} from '../../utils/patient_validations.js';
import { StatusCodes } from "http-status-codes";

export async function createPatient(req,res){
    const patientRepository = new PatientRepository();
    const {error,value} = createPatientSchema(req.body);
    const {BAD_REQUEST,OK}= StatusCodes;
    
    if(error){
        return res.status(BAD_REQUEST).json({
            [error.name]: error.message
        });
    }
    const patient = await patientRepository.createPatient(value);
    res.status(OK).json(patient);

}