import { Router } from "express";
import { UserRegister , UserLogin,GetAllUsers,GetUserProfile,deleteUser,GetUserById, Homepage} from "../Controllers/UserController";
import { VerifyToken } from "../Middlewares/VerifyToken";


const authrouter = Router();

// ROUTES FOR USER
authrouter.route("/register").post(UserRegister);
authrouter.route("/login").post(UserLogin);
authrouter.route("/user/:id").get(GetUserById);
authrouter.route("/users").get(GetAllUsers);
authrouter.route("/profile/:user_id").get(GetUserProfile);
authrouter.route("/delete/:id").patch(deleteUser);
authrouter.get('/home',VerifyToken, Homepage)//protected Route



export default authrouter;