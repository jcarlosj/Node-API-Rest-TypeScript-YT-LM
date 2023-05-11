import { Router } from 'express';
import { readdirSync } from 'fs';


const
    PATH_ROUTER = `${ __dirname }`,
    router = Router();

/**
 * Elimina extension de un archivo dado
 * @param fileName: Nombre del archivo con la extensión. Ej: item.ts
 * @returns Nombre del archivo sin la extensión. Ej: item
 */    
const cleanFileName = ( fileName: string ) => fileName.split( '.' ).shift();

/**
 * Lee el contenido de un directorio de forma sincrónica. 
 * Toma una ruta de directorio como argumento y devuelve una matriz que contiene 
 * los nombres de archivo y subdirectorios presentes en el directorio especificado.
 */
readdirSync( PATH_ROUTER ).filter( fileName => {
    // console.log( fileName, cleanFileName( fileName ) );
    const cleanName = cleanFileName( fileName );

    if( cleanName !== 'index' ) {
        // Importacion dinámica
        import( `./${ cleanName }` )
            .then( moduleRouter => {
                console.log( `PATH: /${ cleanName }` );

                // Middleware: Hace uso del archivo de configuracion de ruta especificado
                router.use( `/${ cleanName }`, moduleRouter.router );
            });
    }

});


export { router };