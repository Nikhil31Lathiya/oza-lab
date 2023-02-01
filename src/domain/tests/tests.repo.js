import { PrismaClient } from "@prisma/client";

class TestRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  createTest(body) {
    return this.prisma.test.create({
      data: body,
    });
  }

  getTests() {
    return this.prisma.test.findMany();
  }

  getTest(id) {
    return this.prisma.test.findFirst({ where: { id } });
  }

  deleteTest(id) {
    return this.prisma.test.delete({ where: { id } });
  }

  updateTest(id, body) {
    return this.prisma.test.update({ where: { id }, data: body });
  }
}

export default TestRepository;
