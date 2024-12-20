import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
// authentication
export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log("middleware:", token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETE_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    next();
  } catch (error) {
    console.log("Error occuring in Authentication:" + error);
    return res.status(401).json({ message: "User is Unauthorized" });
  }
};

//authorization
export const isAdmin = (...roles) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: `User with give role ${req.user.role}not allowed` });
    }
    next();
  };
};
