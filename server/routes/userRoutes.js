import express from "express";
import {
  getUserId,
  getUserResume,
  loginUser,
  registerUser,
} from "../controllers/userController";
import protect from "../middlewares/authMiddleware";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/data", protect, getUserId);
userRouter.get("/resumes", protect, getUserResume);

export default userRouter;
