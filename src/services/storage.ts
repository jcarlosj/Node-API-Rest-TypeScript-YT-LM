import { Storage } from "../interfaces/storage.interface";
import storageModel from "../models/storage";

//  Registra subida de archivos
const registerUploadedFile = async ( { fileName, path, userId }: Storage ) => {
    return await storageModel.create( { fileName, path, userId } ); 
}


export {
    registerUploadedFile
};