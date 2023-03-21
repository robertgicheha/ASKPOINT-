import ejs from 'ejs'
import sendMail from '../Helpers/email';
import mssql from 'mssql'
import { sqlConfig } from '../Config/config';

interface User{
    userid: string;
    name: string;
    email: string;
    password: string;
    created_at:string;
    is_sent: string;
    role: string;
    is_deleted: string;
}

const sendWelcomeEmail = async()=>{
    const pool = await mssql.connect(sqlConfig)
    const users:User[]= await(await pool.request().
    query("SELECT * FROM users WHERE is_sent ='0'")).recordset
    // console.log(users);

for(let user of users){
    ejs.renderFile('Templates/registration.ejs',{name:user.name}, async(_error, html)=>{

    const message = {
    from: process.env.EMAIL,
    to: user.email,
    subject: "Welcome To AskPoint",
    html
};

// console.log(html);

 try {
await sendMail(message) 
await pool.request().query(`UPDATE users SET is_sent ='1' WHERE userid ='${user.userid}'`)
 } catch (error) {
    console.log(error);
    
 }  
})
}    
}
export default sendWelcomeEmail


