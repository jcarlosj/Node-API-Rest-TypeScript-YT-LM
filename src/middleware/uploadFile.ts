import { Request } from "express";
import multer, { diskStorage } from "multer";


// Ruta de almacenamiento para los archivos subidos
const PATH_STORAGE = `${ process.cwd() }/storage`;

// Configuración del almacenamiento de Multer
const storage = diskStorage({
    destination( req: Request, file: Express.Multer.File, cb: any ) {
        // La función `destination` define la carpeta de destino para almacenar los archivos
        // En este caso, se utiliza `PATH_STORAGE` como carpeta de destino
        cb( null, PATH_STORAGE) ;
    },
    filename( req: Request, file: Express.Multer.File, cb: any ) {
        // La función `filename` define el nombre del archivo en el servidor
        // En este caso, se genera un nombre aleatorio utilizando la fecha actual y la extensión del archivo original
        const ext = file.originalname.split(".").pop();
        const fileNameRandom = `image-${ Date.now() }.${ext}`;
        cb( null, fileNameRandom );
    },
});


// Middleware de Multer para gestionar la subida de archivos sobre las rutas de Express
const multerMiddleware = multer({ storage });

export default multerMiddleware;