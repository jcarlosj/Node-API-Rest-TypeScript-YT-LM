import { Router, Request, Response } from 'express';
import { register } from '../controllers/auth';


const router = Router();

/**
 * http://localhost:3002/auth
 */
router.post( '/register', register );


export { router };