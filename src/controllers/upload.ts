import { Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { RequestExtends } from '../interfaces/RequestExtends.interface';
import { registerUploadedFile } from '../services/storage';
import { Storage } from '../interfaces/storage.interface';


const getFile = async ( req: RequestExtends, res: Response ) => {
    try {
        const { authUser, file } = req;

        console.log({ authUser: authUser ? authUser : 'NOT FOUND USER' });
        console.log({ file });

        // Extraemos solo los valores que vamos a insertar en nuestro modelo
        const fileDataToRegister : Storage = {
            fileName: `${ file?.filename }`,
            userId: authUser?.id,
            path: `${ file?.path }`
        }

        // Hacemos uso del servicio para registrar la imagen subida por el Middleware (multerMiddleware) anterior
        const response = await registerUploadedFile( fileDataToRegister );

        res.send({ 
            msg: `Archivo cargado y registrado con exito`,
            response,
            user: authUser
        });
    }
    catch( error ) {
        handleHttp( res, 'ERROR_GET_FILE' );
    }
}


export {
    getFile
};