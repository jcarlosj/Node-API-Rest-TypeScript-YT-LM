import { Router, Request, Response } from 'express';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/item';


const router = Router();


/**
 * http://localhost:3002/item
 */
router.get( '/', getItems );
router.get( '/:id', getItem );
router.post( '/', postItem );
router.put( '/:id', updateItem );
router.delete( '/', deleteItem );


export { router };