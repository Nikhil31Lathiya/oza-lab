import { PrismaClient } from "@prisma/client";

class TestRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createTest(body) {
    try {
      return this.prisma.test.create({
        data: body,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getTests() {
    try {
      return this.prisma.test.findMany();
    } catch (error) {
      console.log(error);
    }
  }

  async getTest(id) {
    try {
      return this.prisma.test.findFirst({ where: { id } });
    } catch (error) {
      console.log(error);
    }
    
  }

  async deleteTest(id) {
    try {
      const findTest = await this.prisma.test.findFirst({ where: { id } });
      if (findTest) {
        return this.prisma.test.delete({ where: { id } });
      } else {
        return { message: "User not found " };
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateTest(id, data) {
    try {
      return this.prisma.test.update({
        data: {
          name: data.name,
          shortName: data.shortName,
          isActive: data.isActive,
          price: data.price,
          measurement: data.measurement,
          updatedAt: data.updatedAt,
        },
        where: { id },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default TestRepository;
