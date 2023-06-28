import { Router, Request, Response } from 'express';
import multerMiddleware from '../middleware/uploadFile';
import { getFile } from '../controllers/upload';


const router = Router();

/**
 * http://localhost:3002/upload
 */

const fileUploadFieldName = 'fileToUpload';

router.post( '/', multerMiddleware.single( fileUploadFieldName ), getFile );      // Solo tendran acceso al endpoint usuarios autenticados



export { router };