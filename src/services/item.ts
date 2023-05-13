import { Car } from '../interfaces/car.interface';
import ItemModel from '../models/items';


const insertCar = async ( item: Car ) => {
    return await ItemModel.create( item );
};

const getCars = async () => {
    return await ItemModel.find({});
};


export {
    insertCar,
    getCars
}