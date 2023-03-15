import express from "express";
import { RegisterUser , loginUser,getAllUsers,getUserProfile,deleteUser,getUserById} from "./../Controllers/authUserController";

const userRoutes = express.Router();

// USER ROUTES
userRoutes.route("/signup").post(RegisterUser);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/profile/:userId").get(getProfile);
userRoutes.route("/users").get(getAllUsers);
userRoutes.route("/delete/:id").patch(deleteUser);
userRoutes.route("/updatepassword/:id").patch(updatePassword);
userRoutes.route("/user/:id").get(getUserById);


export default userRoutes;