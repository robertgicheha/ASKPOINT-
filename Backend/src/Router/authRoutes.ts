import express from "express";
import { UserRegister , UserLogin,GetAllUsers,GetUserProfile,deleteUser,GetUserById} from "../Controllers/authUserController";

const authrouter = express.Router();

// ROUTES FOR USER
authrouter.route("/register").post(UserRegister);
authrouter.route("/login").post(UserLogin);
authrouter.route("/user/:id").get(GetUserById);
authrouter.route("/users").get(GetAllUsers);
authrouter.route("/profile/:user_id").get(GetUserProfile);
authrouter.route("/delete/:id").patch(deleteUser);



export default authrouter;