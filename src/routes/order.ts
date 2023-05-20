import { Router, Request, Response } from 'express';
import { getItems } from '../controllers/order';
import { authUser } from '../middleware/session';


const router = Router();


/**
 * http://localhost:3002/order
 */

router.get( '/', authUser, getItems );      // Solo tendran acceso al endpoint usuarios autenticados



export { router };