import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import path from 'path'
import Jwt from 'jsonwebtoken'
import {v4 as uid} from 'uuid'
import { RequestHandler,Request,Response } from 'express'
import  validateUser from '../Helpers/UserHelper'
import DatabaseHelper from "../DatabaseHelpers/index";
import UserBody from '../Models/user'

const  _db = new DatabaseHelper()

dotenv.config({ path:path.resolve(__dirname, '../.env')})

//REGISTER A USER
export const UserRegister = async (req: Request, res: Response) => {
    try {
        const userid = uid()
        const { name, email, password, } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
       
        const user = new UserBody (
            uid(),
            name,
            email,
            hashedPassword,
            new Date().toISOString(),
            "0",
            "0",
            "0",

        );
        console.log(user);
        
        const { error } = validateUser(user);

        if (error) {
            return res.status(400).json({ message: "Error in user body" });
        }

        const Registered = await _db.exec("createUser", {
            userid: user.userid,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            is_deleted: user.is_deleted,
            is_sent: user.is_sent,
            created_at: user.created_at.toString()
        });



        if(Registered){
            res.status(200).json({message:"User registered successfully"})
        }
        else{
            res.status(200).json({message:"Registration Failed"})
        }
        }
        //    if(Registered){
        //     const token = Jwt.sign(user, process.env.SECRETKEY as string, {expiresIn: '1d'});
        //     res.status(200).json({status:"User registered successfully",
        //     data:{
        //         token,
        //         user
        //     }
        // });
        // }else{
        //     res.status(500).json({message:"There was an error creating user"})
        // }
        // if (Registered) {
        //     const token = jwt.sign(
        //         { userid:user.userid, email: user.email, name: user.name },
        //         process.env.JWT_SECRET as string,
        //         {
        //             expiresIn: "1d",
        //         }
        //     );
        //     return res.status(201).json({ message: "User registered successfully", token, user });
        // }
        // else {
        //     return res.status(500).json({ message: "Erro is registration" });
        // }



    catch (err: any) {
        res.status(500).json({ message: "Server Error" });
    }


}

// USER LOGIN
export const LoginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user: UserBody[] = await _db.exec("getUserByEmail", { email:email }) as unknown as UserBody[];

        if (!user) {
            return res.status(400).json({ message: "User  was not found" });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const goodPass = await bcrypt.compare(password, user[0].password);
        if (!goodPass) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        const token = Jwt.sign(
            { userid: user[0].userid, email: user[0].email, name: user[0].name },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "1d",
            }
        );
        return res.status(200).json({ message: "User Has logged In Successfully", token, user });
    }
    catch (err: any) {
        res.status(500).json({ message: "Srerver Error" });
    }

}


  // GET ALL USERS

  export const GetAllUsers = async (req: Request, res: Response) => {
    try {
       
        const users: UserBody[] = await _db.exec("getAllUsers", {}) as unknown as UserBody[];

        if (!users) {
            return res.status(400).json({ message: "No users found" });
        }

        return res.status(200).json({ message: "All Users Found", users });
    }
    catch (err: any) {
        res.status(500).json({ message: err.message });
    }

}
  // GET USER BY ID
  export const GetUserById = async (req: Request, res: Response) => {
    try {
        const { userid } = req.params;
        const user: UserBody = await _db.exec("getUserById", { userid: userid }) as unknown as UserBody;

        if (!user) {
            return res.status(400).json({ message: "User was  not found" });
        }

        return res.status(200).json({ message: "Successfull", user });
    }
    catch (err: any) {
        res.status(500).json({ message: "Error" });
    }

}
  // DELETE A USER
  export const DeleteUser = async (req: Request, res: Response) => {

    try {
        const { userid } = req.params;


        const user: UserBody = await _db.exec("getUserById", { userid: userid }) as unknown as UserBody;

        if (!user) {
            return res.status(400).json({ message: "User was Not found" });
        }

        const deleted = await _db.exec("deleteUser", { userid: userid });

        if (deleted) {
            return res.status(200).json({ message: "User was deleted successfully" });
        }
        else {
            return res.status(500).json({ message: "error" });
        }

    }
    catch (err: any) {
        res.status(500).json({ message: "ERROR" });
    }

}

//UPDATE USER
export const UpdateUser = async (req: Request, res: Response) => {
    try {
        const { userid } = req.params;
        
        const user: UserBody[] = await _db.exec("getUserById", { userid: userid }) as unknown as UserBody[];

        if (!user) {
            return res.status(400).json({ message: "User  was not found" });
        }
        const { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
       
        
        const recent = new UserBody(
            user[0].userid,
            name,
            email,
            hashedPassword,
            new Date(user[0].created_at).toISOString(),
            new Date().toISOString(),
            user[0].is_sent.toString()==='false'?'0':'1',
            user[0].role.toString()==='false'?'0':'1',
        );

        // console.log(recent)


        const { error } = validateUser(recent);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const userUpdated = await _db.exec("createUser", {userid: recent.userid,name: recent.name,email: recent.email,password: recent.password,role: recent.role,is_deleted: recent.is_deleted,is_sent: recent.is_sent,created_at: recent.created_at,
           
        });


        if (userUpdated) {
            return res.status(200).json({ message: "User updated", user: recent});
        }
        else {
            return res.status(500).json({ message: "Internal server error" });
        }

}
catch (err: any) {
    res.status(500).json({ message: "ERROR" });
}
}