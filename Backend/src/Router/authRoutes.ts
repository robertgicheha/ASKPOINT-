import { Router } from "express";
import { CreateUser , UserLogin,GetAllUsers,deleteUser,GetUserById,} from "../Controllers/UserController";
import { VerifyToken } from "../Middlewares/VerifyToken";


const authrouter = Router();

// ROUTES FOR USER
authrouter.route("/register").post(CreateUser);
authrouter.route("/login").post(UserLogin);
authrouter.route("/:id").get(GetUserById);
authrouter.route("/allusers").get(GetAllUsers);
// authrouter.route("/profile/:user_id").get(GetUserProfile);
authrouter.route("/delete/:id").patch(deleteUser);
// authrouter.get('/home',VerifyToken, Homepage)//protected Route



export default authrouter;