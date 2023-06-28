import { Request, Response } from 'express';
import { loginUser, registerNewUser } from "../services/auth";


const register = async ( { body }: Request, res: Response ) => {
    console.log( body );

    const response = await registerNewUser( body );

    res.send( response );
}

const login = async ( { body }: Request, res: Response ) => {
    const 
        { email, password } = body,
        response = await loginUser({ email, password });

    if( response === 'INCORRECT_PASSWORD' ) 
        res.status( 403 ).send( response );
    else
        res.send( response );
}


export {
    register,
    login
};