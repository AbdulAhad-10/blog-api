import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", authorize, getUserProfile);

userRouter.patch("/", authorize, updateUserProfile);

export default userRouter;
