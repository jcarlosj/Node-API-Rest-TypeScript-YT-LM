import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExtends } from "../interfaces/RequestExtends.interface";
import { JwtPayload } from "jsonwebtoken";


// Valida authentication del usuario a través del token
const authUser = ( req: RequestExtends, res: Response, next: NextFunction ) => {
    try {
        // Obtener el token del encabezado
        const 
            { headers } = req,
            bearerTokenFound = headers.authorization || '',     // Bearer token
            token = bearerTokenFound.split(' ').pop(),          // [ 'Bearer', 'token' ] -> token
            payloadToken: JwtPayload | string = verifyToken( `${ token }` );

        if ( ! payloadToken )
            return res.status( 401 ).send({ error: 'INVALID_TOKEN' });

        const { id, email } = payloadToken as { id: number; email: string };    // Desestructuración de los datos del token

        req.authUser = { id, email }; // Agrega datos del usuario autenticado al cuerpo del Request

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
