import express, { json } from 'express'
import cors from 'cors'
import questionrouter from './Router/QuestionRoutes'
import ansrouter from './Router/AnswerRoutes'
import QuestionVoteRouter from './Router/QuestionVoteRoutes'
import AnswerVoteRouter from './Router/AnswerVoteRoutes'
import TagRouter from './Router/TagRouter'
import CommentRouter from './Router/ComentsRoutes'
import userrouter from './Router/UserRoutes'


const app = express()

//Register some Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request

//Register Routes
app.use('/user', userrouter),
app.use('/question' , questionrouter) ,
app.use ('/answer' , ansrouter),
app.use ('/questionvote' , QuestionVoteRouter),
app.use ('/answervote' , AnswerVoteRouter),
app.use ('/tag' , TagRouter),
app.use ('/comment' , CommentRouter),
// app.use ('/profile' , ProfileRouter)



app.listen(4000,()=>{
console.log("Server is up and running...");

})