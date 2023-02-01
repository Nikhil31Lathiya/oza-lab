import TestRepository from "../../domain/tests/tests.repo.js";
import { createTestSchema } from "../../utils/tests_validation.js";
import StatusCodes from 'http-status-codes';

export async function createTest(req,res){
    const testRepository = new TestRepository();
    const {error , value} = createTestSchema(req.body);
    const {BAD_REQUEST, OK} = StatusCodes;

    if (error){
        return res.status(BAD_REQUEST).json({[error.name]: error.message});

    }
    else {
        const test = await testRepository.createTest(value);
        res.status(OK).json(test);
    }

}