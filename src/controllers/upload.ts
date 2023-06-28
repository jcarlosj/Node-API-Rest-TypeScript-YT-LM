import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { RequestExtends } from '../interfaces/RequestExtends.interface';


const getFile = async ( req: RequestExtends, res: Response ) => {
    try {
        const { authUser, file } = req;

        console.log({ authUser: authUser ? authUser : 'NOT FOUND USER' });
        console.log({ file });

        res.send({ 
            msg: `Aqui debe cargar el archivo, sus detalles y propietario`,
            file,
            user: authUser ? authUser : 'NOT FOUND USER'
        });
    }
    catch( error ) {
        handleHttp( res, 'ERROR_GET_FILE' );
    }
}


export {
    getFile
};