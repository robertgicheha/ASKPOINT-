import Bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import path from 'path'
import jwt from 'jsonwebtoken'
import {v4 as uid} from 'uuid'
import { RequestHandler,Request,Response } from 'express'
import { UserSignUpHelper, UserSignInHelper } from '../Helpers/UserHelper'
import { DecodedData, User } from '../Interfaces/index'
import { DatabaseHelper } from "../DatabaseHelper/index";

const  _db = new DatabaseUtils()
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

interface ExtendedRequest extends Request{
  body:{Username:string , Email:string,Password:string, Role:string}
  params:{userId:string},
  info?:DecodedData
}

//REGISTER A USER
export async function UserRegister(req:ExtendedRequest, res:Response){
try {
  const userId =uid()
  const{Username,Email,Password ,Role} = req.body
  console.log(req.body)
  const {error} =UserSignUpHelper.validate(req.body)
  if(error){
      return res.status(422).json(error.details[0].message)
  }
  const hashedPassword= await Bcrypt.hash(Password,10)
  await _db.exec('sp_registerUser', {user_id,name:username, Email:email, password:hashedPassword})
  return res.status(201).json({message:'User is  successfully registered'})

} 
catch (error) {
  console.log(error)
   res.status(500).json(error) 
}
}

// USER LOGIN
export const UserLogin = async (req: Request, res: Response) => {
    try {
        const { Email, Password } = await UserSignInHelper.validateAsync(req.body)
        const user = await _db.exec('sp_GetUserByEmail', { Email })
        if (user.recordset.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }
        const validPassword = await Bcrypt.compare(Password, user.recordset[0].Password)
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }
        const token = jwt.sign(
            { user_id: user.recordset[0].userId, Email: user.recordset[0].Email },
            process.env.JWT_SECRET as string,
            { expiresIn: '1d' }
        )
        res.status(200).json({
            status: 'User logged in successfully',
            data: {
                token,
            },
        })
    } catch (error) {
        res.status(500).json(error)
    }
}
  // GET ALL USERS
  export const GetAllUsers=async(req:ExtendedRequest,res:Response)=>{
    try {
      const users:User[]= await (await  _db.exec('sp_GetAllUsers')).recordset
      if(!users){
         return res.status(404).json({error:'No Users Found'})
      }
    
      return res.status(200).json(users)
    
    } catch (error) {
      return res.status(500).json(error)
    } 
    
  }
  // GET USER BY ID
  export const GetUserById=async(req:ExtendedRequest,res:Response)=>{
    try {
      const userId = req.params.userId
      const user:User= await (await  _db.exec('sp_GetdUserById', {userId})).recordset[0]
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
    const userId = req.params.userId as string;
    const user:User= await (await  _db.exec('sp_GetUserProfile', {userId })).recordset[0]
    if(!user){
       return res.status(404).json({error:'No User Found'})
    }
  
    return res.status(200).json(user)
  
  } catch (error) {
    return res.status(500).json(error)
  }
  
  }

// UPDATE USER PROFILE
// export async function updateProfile(req:ExtendedRequest,res:Response){
//   try {
//   const {display_name,title,location,about,Github,LinkedIn}= req.body
//   const profile:User[]= await (await _db.exec('sp_GetUserProfile', {user_id:req.params.user_id} )).recordset
    
//       if(profile.length){
//         await _db.exec('sp_UpdateUser', {userId:req.params.userId,Name:username, Email:email, Role:Role, is_deleted:isDeleted})
//         return res.status(200).json({message:'User has been updated'})
//       }
//     return res.status(404).json({error:'User Not Found'}) 
  // res.json(profile)
       
//     } 
  
//   catch (error:any) {
//      res.status(500).json(error.message)
//   }
//   }



  // DELETE A USER
  export const deleteUser=async(req:ExtendedRequest,res:Response)=>{
    try {
      const userId = req.params.userId
      const user:User= await (await  _db.exec('sp_GetUserById', {userId})).recordset[0]
      if(!user){
         return res.status(404).json({error:'User Not Found'})
      }
      await _db.exec('sp_deleteUser', {userId})
      return res.status(200).json({message:'User deleted successfully'})
    
    } catch (error) {
      return res.status(500).json(error)
    }
  }
