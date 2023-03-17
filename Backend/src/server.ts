import express, { json } from 'express'
import authrouter from './Router/authRoutes'
import cors from 'cors'


const app = express()

//Register some Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request

//Register Routes
app.use('/user', authrouter)


app.listen(4000,()=>{
console.log("Running Server...");

})