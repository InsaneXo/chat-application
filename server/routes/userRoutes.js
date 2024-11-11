import express from "express";
import { loginController } from "../controllers/userControllers.js";

const userRoute = express.Router();


userRoute.get("/login", loginController);

export default userRoute;
