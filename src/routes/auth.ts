import { Router, Request, Response } from 'express';
import { login, register } from '../controllers/auth';


const router = Router();

/**
 * http://localhost:3002/auth
 */
router.post( '/register', register );
router.post( '/login', login );


export { router };