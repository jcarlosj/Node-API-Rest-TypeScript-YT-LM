import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { RequestExtends } from '../interfaces/RequestExtends.interface';


const getItems = async ( req: RequestExtends, res: Response ) => {
    try {
        res.send({ 
            msg: `Usuario autenticado con token valido`,
            user: req.authUser 
        });
    }
    catch( error ) {
        handleHttp( res, 'ERROR_GET_ITEMS' );
    }
}


export {
    getItems
};