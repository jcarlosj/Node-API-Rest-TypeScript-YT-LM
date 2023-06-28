import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { RequestExtends } from '../interfaces/RequestExtends.interface';


const getFile = async ( req: RequestExtends, res: Response ) => {
    try {
        res.send({ 
            msg: `Aqui debe cargar el archivo`,
            user: req.authUser 
        });
    }
    catch( error ) {
        handleHttp( res, 'ERROR_GET_FILE' );
    }
}


export {
    getFile
};