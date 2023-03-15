import express from "express";
import { UserRegister , UserLogin,GetAllUsers,GetUserProfile,deleteUser,GetUserById} from "../Controllers/authUserController";

const userRoutes = express.Router();

// ROUTES FOR USER
userRoutes.route("/register").post(UserRegister);
userRoutes.route("/login").post(UserLogin);
userRoutes.route("/user/:id").get(GetUserById);
userRoutes.route("/users").get(GetAllUsers);
userRoutes.route("/profile/:user_id").get(GetUserProfile);
userRoutes.route("/delete/:id").patch(deleteUser);



export default userRoutes;