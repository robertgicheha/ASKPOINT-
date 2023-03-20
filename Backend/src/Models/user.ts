
//User Interface
export interface UserBody {
    UserId: string;
    username: string;
    Email: string;
    password: string;
    Role: string;
    // CreatedAt:Date;
    // IsDeleted:number;
  }
  
  //User Profile Interface
  // export interface UserProfile{
  //   Display_name: string;
  //   location: string;
  //   about:string;
    
  // }


  //Decoded Data Interface
  export interface DecodedData{
    UserId: string;
    username: string;
    Email: string;
    password: string;
    Role: string;
    iat: number,
    exp: number
  }
  

  
    


 
