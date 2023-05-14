import { Car } from '../interfaces/car.interface';
import ItemModel from '../models/items';


const insertCar = async ( item: Car ) => {
    return await ItemModel.create( item );
};

const getCars = async () => {
    return await ItemModel.find({});
};

const getCar = async ( id: string ) => {
    return await ItemModel.findOne({ _id: id });
}

const updateCar = async ( id: string, item: Car ) => {
    return await ItemModel.findOneAndUpdate(
        { _id: id },        // Query de busqueda
        item,               // Data por la que vamos a actualizar
        { new: true }       // Configuracion que activa como respuesta el retorno del objeto actualizado
    );
}

const deleteCar = async ( id: string ) => {
    return await ItemModel.findByIdAndRemove({ _id: id });
}


export {
    insertCar,
    getCars,
    getCar,
    updateCar,
    deleteCar
}