import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import path from 'path'
import jwt from 'jsonwebtoken'
import {v4 as uid} from 'uuid'
import { RequestHandler,Request,Response } from 'express'
import { UserRegisterHelper, UserLogInHelper } from '../Helpers/UserHelper'
import { DecodedData, User } from '../Interfaces/index'
import { DatabaseHelper } from "../DatabaseHelpers/index";

const  _db = new DatabaseHelper()

dotenv.config({ path:path.resolve(__dirname, '../.env')})


interface ExtendedRequest extends Request{
  body:{Name:string , Email:string,Password:string, ConfirmPassword:string}
  info?:DecodedData
}

//REGISTER A USER
export async function UserRegister(req:ExtendedRequest, res:Response){
  try {
    const userId =uid()
    const{Name,Email,Password} = req.body
    const {error} =UserRegisterHelper.validate(req.body)
    if(error){
        return res.status(422).json(error.details[0].message)
    }
    const hashedPassword= await bcrypt.hash(Password,10)


    ///check if email exist
    await _db.exec('sp_registerUser', {userId, Name:Name, Email:Email, password:hashedPassword})
    return res.status(201).json({message:'User has been registered successfully'})

} 
catch (error) {
     res.status(500).json(error) 
}
}


// USER LOGIN
export async function UserLogin(req:ExtendedRequest, res:Response){
  try {
      const{Email,Password} = req.body
      const {error} =UserLogInHelper.validate(req.body)
      if(error){
          return res.status(422).json(error.details[0].message)
      }
  
      const user:User[]= await (await _db.exec('sp_GetUserbyEmail', {Email} )).recordset
          if(!user[0]){
           return res.status(404).json({error:'User Has Not Been Found'})
          }

      const valid= await bcrypt.compare(Password, user[0].password)
      if(!valid){
          return res.status(404).json({error:'User Not found'})
      }
  
      const payload= user.map(item=>{
          const {password,...rest}=item
          return rest
      })
      
      const token = jwt.sign(payload[0], process.env.SECRETKEY as string , {expiresIn:'1d'})
      return res.status(200).json({message:'User has Logged In Successfully', token, Name:user[0].userame , Role:user[0].Role})
   
  } catch (error) {
      res.status(500).json(error) 
  }
  }

// Login 
// export async function UserLogin(req:ExtendedRequest,res:Response) {
//   try {
//     const { Email, Password } = req.body;
//     const { error } = UserLogInHelper.validate(req.body);
//     if (error) {
//       return res.status(422).json(error.details[0].message);
//     }

//     const user: User[] = (await _db.exec('sp_GetUserbyEmail', { Email})).recordset;
//     // console.log(user);
    
//     if (user.length===0) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     console.log(user);
    
//     console.log("pass from db",user[0].password);
//     console.log("pass",Password);
    
//     const valid = await bcrypt.compare(Password, user[0].password);
    
//     if (!valid) {
//       return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     const { password: omitPassword, ...payload } = user[0]; //omit password from payload
//     const token = jwt.sign(payload, process.env.SECRETKEY as string, { expiresIn: '1d' });
//     return res.status(200).json({ message: 'User has logged in successfully', token, ...payload });

//   } catch (error) {
//     console.log ('Error in UserLogin:', error);
//     res.status(500).json({ error: 'An error occurred while processing your request' });
//   }
// }
  
//HOMEPAGE
export async function Homepage(req:ExtendedRequest,res:Response) {
  try {
    if(req.info){
      console.log(req.info.Name);
      
      return res.status(200).json(`Greetings ${req.info.Name}`)
    }  
    else {
      return res.status(400).json('Request does not contain valid info');
    }
  } catch (error) {
    {
      console.error(error);
      return res.status(500).json('Internal Server Error');
    }
  }
}
  // GET ALL USERS
  export const GetAllUsers=async(req:ExtendedRequest,res:Response)=>{
    try {
      const users:User[]= await (await  _db.exec('sp_GetAllUsers')).recordset
      if(!users){
         return res.status(404).json({error:'No User Has BeenFound'})
      }
    
      return res.status(200).json(users)
    
    } catch (error) {
      return res.status(500).json(error)
    } 
    
  }
  // GET USER BY ID
  export const GetUserById=async(req:ExtendedRequest,res:Response)=>{
    try {
      const userId = req.params.user_id
      const user:User= await (await  _db.exec('sp_GetUserbyId', {userId})).recordset[0]
      if(!user){
         return res.status(404).json({error:'User Is Not Found'})
      }
    
      return res.status(200).json(user)
    
    } catch (error) {
      return res.status(500).json(error)
    }
    
  }
// GET USER PROFILE

export const GetUserProfile=async(req:ExtendedRequest,res:Response)=>{
  try {
    // const id = req.params.userId
    const userId = req.params.user_id as string;
    const user:User= await (await  _db.exec('sp_GetUserProfile', {userId })).recordset[0]
    if(!user){
       return res.status(404).json({error:'No User has been  Found'})
    }
  
    return res.status(200).json(user)
  
  } catch (error) {
    return res.status(500).json(error)
  }
  
  }

//  UPDATE USER PROFILE
// export async function updateProfile(req:ExtendedRequest,res:Response){
//   try {
//   const {display_name,location,about}= req.body
//   const profile:User[]= await (await _db.exec('sp_GetUserProfile', {user_id:req.params.user_id} )).recordset
    
//       if(profile.length){
//         await _db.exec('sp_update_profile_info', {user_id:req.params.user_id,Display_name:display_name,Location:location,About:about})
//         return res.status(200).json({message:'User has been updated'})
//       }
//     return res.status(404).json({error:'User Is Not Found'}) 
//   res.json(profile)
       
//     } 
  
//   catch (error:any) {
//      res.status(500).json(error.message)
//   }
//   }

  // DELETE A USER
  export const deleteUser=async(req:ExtendedRequest,res:Response)=>{
    try {
      const userId = req.params.user_id
      const user:User= await (await  _db.exec('sp_sp_DeleteUser', {userId})).recordset[0]
      if(!user){
         return res.status(404).json({error:'User Is Not Found'})
      }
      await _db.exec('sp_deleteUser', {userId})
      return res.status(200).json({message:'User deleted successfully'})
    
    } catch (error) {
      return res.status(500).json(error)
    }
  }
