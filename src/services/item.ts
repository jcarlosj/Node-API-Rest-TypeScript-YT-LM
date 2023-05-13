import { Car } from '../interfaces/car.interface';
import ItemModel from '../models/items';


const insertItem = async ( item: Car ) => {
    return await ItemModel.create( item );
};


export {
    insertItem
}