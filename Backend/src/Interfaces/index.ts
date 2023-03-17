export interface User {
    UserId: string;
    userame: string;
    Email: string;
    password: string;
    Role: string;
  }

  // export interface UserProfile{
  //   Display_name: string;
  //   location: string;
  //   about:string;
    
  // }

  export interface DecodedData{
    UserId: string;
    Name: string;
    Email: string;
    Password: string;
    Role: string;
    iat: number,
    exp: number
  }
  