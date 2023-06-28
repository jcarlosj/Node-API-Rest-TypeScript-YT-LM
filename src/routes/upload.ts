import { Router, Request, Response } from 'express';
import { multerMiddleware } from '../middleware/uploadFile';
import { getFile } from '../controllers/upload';


const router = Router();

/**
 * http://localhost:3002/upload
 */

router.post( '/', multerMiddleware, getFile );      // Solo tendran acceso al endpoint usuarios autenticados



export { router };