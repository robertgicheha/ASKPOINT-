import { Request,Response,NextFunction } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import Jwt from 'jsonwebtoken'
import UserBody from '../Models/user'

dotenv.config({ path:path.resolve(__dirname, '../.env')})


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];

        Jwt.verify(bearerToken,process.env.SECRETKEY as string, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.body.user = authData;
                next();
            }
        }
        );
    } else {
        res.sendStatus(403);
    }
};