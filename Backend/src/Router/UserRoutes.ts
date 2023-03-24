import { Router } from "express";


import { getAllUsers, getUserById, HomePage, LoginUser, RegisterUser } from "../Controllers/UserController";
import { VerifyToken } from "../Middlewares/VerifyToken";

const registerRouter = Router() 

registerRouter.post('/register' ,RegisterUser) 
registerRouter.post('/login', LoginUser) 
registerRouter.get ('/all/all' ,getAllUsers)
registerRouter.get('/:id' ,getUserById)
registerRouter.get('/home',VerifyToken ,HomePage)  //protected route




export default registerRouter;








// ROUTES FOR USER

// userrouter.route("/register").post(UserRegister);
// userrouter.route("/login").post(LoginUser);
// userrouter.route("/:id").get(GetUserById);
// userrouter.route("/all/all").get(GetAllUsers);
// userrouter.route("/update/:id").put(UpdateUser);
// // authrouter.route("/profile/:user_id").get(GetUserProfile);
// userrouter.route("/delete/:id").patch(DeleteUser);
// // authrouter.get('/home',VerifyToken, Homepage)//protected Route

