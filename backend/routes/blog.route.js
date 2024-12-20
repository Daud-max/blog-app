import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getMyBlogs,
  getSingleBlogs,
  updateBlog,
} from "../controller/blog.controller.js";
import { isAdmin, isAuthenticated } from "../middleware/authUser.js";
const router = express.Router();
router.post("/create", isAuthenticated, isAdmin("admin"), createBlog);
router.delete("/delete/:id", isAuthenticated, isAdmin("admin"), deleteBlog);
router.get("/all-blogs", isAuthenticated, getAllBlogs);
router.get("/single-blog/:id", isAuthenticated, getSingleBlogs);
router.get("/my-Blog", isAuthenticated, isAdmin("admin"), getMyBlogs);
router.put("/update/:id", isAuthenticated, isAdmin, updateBlog);
export default router;
