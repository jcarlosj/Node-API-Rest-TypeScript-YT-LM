import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";


// Valida authentication del usuario a través del token
const authUser = ( { headers }: Request, res: Response, next: NextFunction ) => {
    try {
        // Obtener el token del encabezado
        const 
            bearerTokenFound = headers.authorization || '',     // Bearer token
            token = bearerTokenFound.split(' ').pop(),          // [ 'Bearer', 'token' ] -> token
            payloadToken = verifyToken( `${ token }` );

        if ( ! payloadToken )
            return res.status( 401 ).send({ error: 'INVALID_TOKEN' });

        console.info({ payloadToken });

        next();
    } 
    catch( error ) {
        // console.error({ error });       // Descomentar solo para conocer el error estandar
        res.status( 400 ).send({ error: 'INVALID_AUTHENTICATION' });
    }
};

export {
    authUser
};
