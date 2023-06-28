import { NextFunction, Request, Response } from "express";

// Valida authentication del usuario a través del token
const multerMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
    // Ref: https://dev.to/qbentil/nodejs-dirname-vrs-processcwd-3k88
    console.log( `Multer Middleware: ${ process.cwd() }/storage` );

    next();
}

export {
    multerMiddleware
};