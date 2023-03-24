import express, { json } from 'express'
import cors from 'cors'
import questionsRouter from './Router/QuestionRoutes'
import aanswersRouter from './Router/AnswerRoutes'
import QuestionVoteRouter from './Router/QuestionVoteRoutes'
import AnswerVoteRouter from './Router/AnswerVoteRoutes'
import TagRouter from './Router/TagRouter'
import commentsRouter from './Router/ComentsRoutes'
import registerRouter from './Router/UserRoutes'


const app = express()

//Register some Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request

//Register Routes
app.use('/user', registerRouter),
app.use('/question' , questionsRouter) ,
app.use ('/answer' ,aanswersRouter),
app.use ('/questionvote' , QuestionVoteRouter),
app.use ('/answervote' , AnswerVoteRouter),
app.use ('/tag' , TagRouter),
app.use ('/comment' ,commentsRouter),
// app.use ('/profile' , ProfileRouter)



app.listen(4000,()=>{
console.log("Server is up and running...");

})