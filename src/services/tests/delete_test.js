import TestRepository from "../../domain/tests/tests.repo.js";


export async function deleteTest(req, res) {
  const testRepository = new TestRepository();
 
  const test = await testRepository.deleteTest(parseInt(req.params.id));
  if (test) {
    return res.status(200).json(test);
  }

  res.status(404).json({ message: "test not found" });
}
