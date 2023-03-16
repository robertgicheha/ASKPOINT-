export interface User {
    UserId: string;
    Username: string;
    Email: string;
    Password: string;
    Role: string;
  }

  // export interface UserProfile{
  //   Display_name: string;
  //   location: string;
  //   about:string;
    
  // }

  export interface DecodedData{
    UserId: string;
    Username: string;
    Email: string;
    Password: string;
    Role: string;
    iat: number,
    exp: number
  }
  