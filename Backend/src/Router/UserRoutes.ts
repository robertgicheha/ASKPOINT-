import { Router } from "express";
import { UserRegister , LoginUser,DeleteUser,GetUserById, UpdateUser, GetAllUsers} from "../Controllers/UserController";


const userrouter = Router();

// ROUTES FOR USER
userrouter.route("/register").post(UserRegister);
userrouter.route("/login").post(LoginUser);
userrouter.route("/:id").get(GetUserById);
userrouter.route("/all/all").get(GetAllUsers);
userrouter.route("/update/:id").put(UpdateUser);
// authrouter.route("/profile/:user_id").get(GetUserProfile);
userrouter.route("/delete/:id").patch(DeleteUser);
// authrouter.get('/home',VerifyToken, Homepage)//protected Route


export default userrouter;