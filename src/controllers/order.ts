import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';


const getItems = async ( req: Request, res: Response ) => {
    try {
        res.send({ msg: `Usuario autenticado con token valido` });
    }
    catch( error ) {
        handleHttp( res, 'ERROR_GET_ITEMS' );
    }
}


export {
    getItems
};