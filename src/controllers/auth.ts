import { Request, Response } from 'express';
import { registerNewUser } from "../services/auth";


const register = async ( { body }: Request, res: Response ) => {
    const response = await registerNewUser( body );

    res.send( response );
}


export {
    register
};