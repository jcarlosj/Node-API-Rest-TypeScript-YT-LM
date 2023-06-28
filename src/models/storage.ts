import { Schema, Types, Model, model } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { Storage } from '../interfaces/storage.interface';


// * Schema: Es una representacion estructural de la entidad que se va a guardar en la base de datos
const storageSchema = new Schema<Storage>({
    fileName: {
        type: 'string',
    },
    path: {
        type: 'string',
    },
    userId: {
        type: 'string',
    }
},
{
    timestamps: true,
    versionKey: false,
});


// * Creamos un modelo a partir de nuestro Schema
const storageModel = model( 'storage', storageSchema );


export default storageModel;