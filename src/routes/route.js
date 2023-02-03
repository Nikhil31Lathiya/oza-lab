import express from "express";
import userRoute from "./user/user.route.js";
import testRoute from "./tests/test.route.js";
const route = express.Router();

route.use("/user", userRoute);
route.use("/tests", testRoute);

export default route;
