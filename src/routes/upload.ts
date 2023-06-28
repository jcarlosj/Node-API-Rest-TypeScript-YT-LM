import { Router, Request, Response } from 'express';
import multerMiddleware from '../middleware/uploadFile';
import { getFile } from '../controllers/upload';
import { authUser } from '../middleware/session';


const router = Router();

/**
 * http://localhost:3002/upload
 */

const fileUploadFieldName = 'fileToUpload';

router.post( '/', authUser, multerMiddleware.single( fileUploadFieldName ), getFile );      // Solo tendran acceso al endpoint usuarios autenticados



export { router };