
//User Interface
 class UserBody{
  userid: string;
  name: string;
  email: string;
  password: string;
  created_at:string;
  is_sent: string;
  role: string;
  is_deleted: string;



   
constructor(userid: string, name: string, email: string, password: string, created_at: string,  is_sent: string, role: string, is_deleted: string) {
  this.userid = userid;
  this.name = name;
  this.email = email;
  this.password = password;
  this.created_at = created_at;
  this.is_sent = is_sent;
  this.role = role;
  this.is_deleted = is_deleted;
}
    
}

export default UserBody
 
