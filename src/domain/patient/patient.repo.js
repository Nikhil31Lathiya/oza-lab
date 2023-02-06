import { PrismaClient } from "@prisma/client";

class PatientRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createPatient(body) {
    try {
      return this.prisma.patient.create({
        data: body,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getPatients() {
    try {
      return this.prisma.patient.findMany();
    } catch (error) {
      console.log(error);
    }
  }

  async getPatient(id) {
    try {
      return this.prisma.patient.findFirst({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async deletePatient(id) {
    try {
      const findPatient = await this.prisma.patient.findFirst({ where: { id } });
      if (findPatient) {
        return this.prisma.patient.delete({ where: { id } });
      } else {
        return { message: "Patient not found " };
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updatePatient(id, body) {
    try {
      return this.prisma.patient.update({
         where: { id }, data: body
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default PatientRepository;