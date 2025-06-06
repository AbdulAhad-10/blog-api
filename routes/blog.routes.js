import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../controllers/blog.controller.js";

const blogRouter = Router();

blogRouter.get("/", getAllBlogs);

blogRouter.post("/", authorize, createBlog);

blogRouter.get("/:id", getBlogById);

blogRouter.patch("/:id", authorize, updateBlog);

blogRouter.delete("/:id", authorize, deleteBlog);

export default blogRouter;
