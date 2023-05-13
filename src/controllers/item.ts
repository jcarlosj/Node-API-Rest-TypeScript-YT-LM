import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';


const getItem = ( req: Request, res: Response ) => {
    try {
        console.log( `[GET]: getItem` );
        res.send( `[GET]: getItem` );
    }
    catch( error ) {
        handleHttp( res, 'ERROR_GET_ITEM' );
    }
}

const getItems = ( req: Request, res: Response ) => {
    try {
        console.log( `[GET]: getItems` );
        res.send( `[GET]: getItems` );
    }
    catch( error ) {
        handleHttp( res, 'ERROR_GET_ITEMS' );
    }
}

const updateItem = ( req: Request, res: Response ) => {
    try {
        console.log( `[PUT]: updateItem` );
        res.send( `[PUT]: updateItem` );
    }
    catch( error ) {
        handleHttp( res, 'ERROR_UPDATE_ITEM' );
    }
}

const postItem = async ( req: Request, res: Response ) => {
    try {
        console.log( `[POST]: postItem` );
        res.send( `[POST]: postItem` );
    }
    catch( error ) {
        handleHttp( res, 'ERROR_POST_ITEM', error );
    }
}

const deleteItem = ( req: Request, res: Response ) => {
    try {
        console.log( `[DELETE]: deleteItem` );
        res.send( `[DELETE]: deleteItem` );
    }
    catch( error ) {
        handleHttp( res, 'ERROR_DELETE_ITEM' );
    }
}


export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
};