import Bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import path from 'path'
import jwt from 'jsonwebtoken'
import {v4 as uid} from 'uuid'
import { RequestHandler,Request,Response } from 'express'
import { UserRegisterHelper, UserLogInHelper } from '../Helpers/UserHelper'
import { DecodedData, User } from '../Interfaces/index'
import { DatabaseHelper } from "../DatabaseHelpers/index";

const  _db = new DatabaseHelper()

dotenv.config({ path:path.resolve(__dirname, '../../src/.env')})
interface ExtendedRequest extends Request{
  body:{Username:string , Email:string,Password:string, ConfirmPassword:string}
  info?:DecodedData
}

//REGISTER A USER
export async function UserRegister(req:ExtendedRequest, res:Response){
  try {
    const id =uid()
    const{Username,Email,Password} = req.body
    const {error} =UserRegisterHelper.validate(req.body)
    if(error){
        return res.status(422).json(error.details[0].message)
    }
    const hashedPassword= await Bcrypt.hash(Password,10)
    ///check if email exist
    await _db.exec('sp_RegisterUser', {id,Username:Username,email:Email, password:hashedPassword})
    return res.status(201).json({message:'User registered'})

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
  
      const user:User[]= await (await _db.exec('sp_GetUserbyEmail', {email:Email} )).recordset
          if(!user[0]){
           return res.status(404).json({error:'User Not found'})
          }
      const valid= await Bcrypt.compare(Password, user[0].Password)
      if(!valid){
          return res.status(404).json({error:'User Not found'})
      }
  
      const payload= user.map(item=>{
          const {Password,...rest}=item
          return rest
      })
      const token = jwt.sign(payload[0], process.env.SECRETKEY as string , {expiresIn:'3600s'})
      return res.status(200).json({message:'User Loggedin!!!', token, role:user[0].Role, name:user[0].Name})
  
  } catch (error) {
      res.status(500).json(error) 
  }
  }
  
//HOMEPAGE
export async function Homepage(req:ExtendedRequest,res:Response) {
  try {
    if(req.info){
      return res.status(200).json(`Welcome ${req.info.Username}`)
    }  
  } catch (error) {
      
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
      const user_id = req.params.user_id
      const user:User= await (await  _db.exec('sp_GetUserbyId', {user_id})).recordset[0]
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
    const user_id = req.params.user_id as string;
    const user:User= await (await  _db.exec('sp_GetUserProfile', {user_id })).recordset[0]
    if(!user){
       return res.status(404).json({error:'No User Is Found'})
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
      const user_id = req.params.user_id
      const user:User= await (await  _db.exec('sp_sp_DeleteUser', {user_id})).recordset[0]
      if(!user){
         return res.status(404).json({error:'User Is Not Found'})
      }
      await _db.exec('sp_deleteUser', {user_id})
      return res.status(200).json({message:'User deleted successfully'})
    
    } catch (error) {
      return res.status(500).json(error)
    }
  }
