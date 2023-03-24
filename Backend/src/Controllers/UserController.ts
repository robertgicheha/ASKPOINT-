import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import path from 'path'
import Jwt from 'jsonwebtoken'
import {v4 as uid} from 'uuid'
import { RequestHandler,Request,Response } from 'express'
import   { authSchema, loginSchema } from '../Helpers/UserHelper'
import mssql from 'mssql'
import sqlConfig from '../Config/config'
import DatabaseHelper from "../DatabaseHelpers/index";
import UserBody from '../Models/user'
import user from '../Models/user'
import { DecodedData } from '../Models'

const  _db = new DatabaseHelper()


interface ExtendedRequest extends Request {

    body: { name: string, email: string, password: string }
  
    info?: DecodedData
  
  }
  

dotenv.config({ path:path.resolve(__dirname, '../.env')})

//REGISTER A USER
// export const UserRegister = async (req: Request, res: Response) => {
//     try {
    
//         const { name, email, password} = req.body;
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
       
//         const user = new UserBody (
//             uid(),
//             name,
//             email,
//             hashedPassword,
//             new Date().toISOString(),
//             "0",
//             "0",
//             "0"

//         );
//         console.log(user);
        
//         const { error } = validateUser(user);

//         if (error) {
//             return res.status(401).json({ message: error.details[0].message });
//         }

//         const Registered = await _db.exec("insertUser", {
//             userid: user.userid,
//             name: user.name,
//             email: user.email,
//             password: user.password,
//             created_at: user.created_at.toString(),
//             is_sent: user.is_sent,
//             role: user.role,
//             is_deleted: user.is_deleted,
//         });
      
        
//         if (Registered) {
//            const token = Jwt.sign(
//             { userid:user.userid, email: user.email, name: user.name },
//             process.env.JWT_SECRET as string,
//             {
//                 expiresIn: "1d",
//             }
//         );
//         return res.status(201).json({ message: "User registered successfully", token, user });
    
//         }else
//         return res.status(500).json({ message: "Error in registration" });
//     }
        
    
//     catch (err: any) {
//         res.status(500).json(err);
//     }
// }
export async function RegisterUser(req: ExtendedRequest, res: Response) {

    try {
      const userid = uid()
      const { name, email, password } = req.body
  
      const { error } = authSchema.validate(req.body)
      if (error) {
        return res.status(422).json(error.details[0].message)
      }
  
      const pool = await mssql.connect(sqlConfig)
  
      const hashedPassword = await bcrypt.hash(password, 10)
      await pool.request()
        .input('id', userid)
        .input('name', name)
        .input('email', email)
        .input('password', hashedPassword)
        .execute('InsertUpdateUser')
  
      res.status(200).json({ message: 'User Registered' })
  
    } catch (error: any) {
      res.status(500).json(error.message)
  
    }
  
  
  }
  

// USER LOGIN
// export const LoginUser = async (req: Request, res: Response) => {
//     try {
//         const { email, password } = req.body;

//         const user: UserBody[] = await _db.exec("getUserByEmail", { email }) as unknown as UserBody[];

//         if (!user) {
//             return res.status(400).json({ message: "User  was not found" });
//         }

//         const salt = await bcrypt.genSalt(10);

//         const hashedPassword = await bcrypt.hash(password, salt);

//         const goodPass = await bcrypt.compare(password, user[0].password);
//         if (!goodPass) {
//             return res.status(400).json({ message: "Password is incorrect" });
//         }

//         const token = Jwt.sign(
//             { userid: user[0].userid, email: user[0].email, name: user[0].name },
//             process.env.JWT_SECRET as string,
//             {
//                 expiresIn: "1d",
//             }
//         );
//         return res.status(200).json({ message: "User Has logged In Successfully", token, user });
//     }
//     catch (err: any) {
//         res.status(500).json({ err });
//     }

// }

export async function LoginUser(req: ExtendedRequest, res: Response) {

    try {
  
      const { email, password } = req.body
      const { error } = loginSchema.validate(req.body)
      if (error) {
        return res.status(422).json(error.details[0].message)
      }
  
      const pool = await mssql.connect(sqlConfig)
      const user: user[] = await (await pool.request().input('email', email).execute('getUserByEmail')).recordset
  
      console.log(user);
  
      if (user.length<1) {
        return res.status(404).json({ error: 'User Not found' })
      }
  
      const valid = await bcrypt.compare(password, user[0].password)
  
  
      if (!valid) {
        return res.status(404).json({ error: 'password Not found' })
      }
  
      const payload = user.map(item => {
  
        const { password, ...rest } = item
        return rest
  
      })
      const token = Jwt.sign(payload[0], process.env.SECRETKEY as string, { expiresIn: '1d' })
    
  
      return res.status(200).json({ message: 'User Loggedin',token:token, userid: user[0].userid,password:user[0].password,isSent:user[0].is_sent,username: user[0].name, email: user[0].email, role: user[0].role })
  
    } catch (error) {
      return res.status(500).json(error)
      
    }
  
  }
  

  // GET USER BY ID
  export const getUserById: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        const users= await (await pool.request().execute('getUserById')).recordset
        res.status(200).json(users)

    } catch (error: any) {

        res.status(500).json(error.message)
    }
}


  // GET ALL USERS

  export const getAllUsers: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        const users= await (await pool.request().execute('sp_getAllUsers')).recordset
        res.status(200).json(users)

    } catch (error: any) {

        res.status(500).json(error.message)
    }
}

  // DELETE A USER
//   export const DeleteUser = async (req: Request, res: Response) => {

//     try {
//         const userid = uid()

//         const oneuser:UserBody[] = await _db.exec("getUserById", { userid }) as unknown as UserBody[];

//         if (!oneuser) {
//             return res.status(400).json({ message: "User was Not found" });
//         }

//         const deleted = await _db.exec("deleteUser", { userid });

//         if (deleted) {
//             return res.status(200).json({ message: "User was deleted successfully" });
//         }
//         else {
//             return res.status(500).json({ message: "User was not deleted" });
//         }

//     }
//     catch (err: any) {
//         res.status(500).json({ message: "ERROR" });
//     }

// }

//UPDATE USER
// export const UpdateUser = async (req: Request, res: Response) => {
//     try {
//    const userid = uid()
//         const user: UserBody[] = await _db.exec("getUserById", { userid: userid }) as unknown as UserBody[];

//         if (!user) {
//             return res.status(400).json({ message: "User  was not found" });
//         }
//         const { name, email, password } = req.body;
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
       
        
//         const recent = new UserBody(
//             user[0].userid,
//             name,
//             email,
//             hashedPassword,
//             new Date(user[0].created_at).toISOString(),
//             new Date().toISOString(),
//             user[0].is_sent.toString()==='false'?'0':'1',
//             user[0].role.toString()==='false'?'0':'1',
//         );

//         // console.log(recent)


//         const { error } = authSchema(recent);
//         if (error) {
//             return res.status(400).json({ message: error.details[0].message });
//         }

//         const userUpdated = await _db.exec("createUser", {userid: recent.userid,name: recent.name,email: recent.email,password: recent.password,role: recent.role,is_deleted: recent.is_deleted,is_sent: recent.is_sent,created_at: recent.created_at,
           
//         });


//         if (userUpdated) {
//             return res.status(200).json({ message: "User updated", user: recent});
//         }
//         else {
//             return res.status(500).json({ message: "Internal server error" });
//         }

// }
// catch (err: any) {
//     res.status(500).json({ message: "ERROR" });
// }
// }
export async function HomePage(req: ExtendedRequest, res: Response) {
  try {

    if (req.info) {
      return res.status(200).json(`Welcome ${req.info.email}`)
    }

  } catch (error) {
    console.log(error);

  }
}