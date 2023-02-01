import TestRepository from "../../domain/tests/tests.repo.js";
import StatusCodes from "http-status-codes/build/cjs/status-codes.js";

export async function deleteTest(req, res) {
  const testRepository = new TestRepository();
  const { OK, NOT_FOUND } = StatusCodes;
  const test = await testRepository.deleteTest(parseInt(req.params.id));
  if (test) {
    return res.status(OK).json(test);
  }
  res.status(NOT_FOUND).json({ message: "test not found" });
}
