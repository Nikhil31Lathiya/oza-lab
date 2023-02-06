import PatientRepository from "../../domain/patient/patient.repo.js";

export async function getPatients(req, res) {
  const patientRepository = new PatientRepository();
  const patients = await  patientRepository.getPatients();
  if (patients.length) {
    return res.status(200).json(tests);
  }

  res.status(404).json({
    message: "No Patients found",
  });
}