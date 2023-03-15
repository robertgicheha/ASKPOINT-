export interface User {
    user_id: string;
    username: string;
    email: string;
    password: string;
    Role: string;
  }

  export interface DecodedData{
    user_id: string;
    username: string;
    email: string;
    Role: string;
    iat: number,
    exp: number
  }
  