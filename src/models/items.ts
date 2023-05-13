import { Schema, Types, Model, model } from 'mongoose';
import { Car } from '../interfaces/car.interface';


// * Schema: Es una representacion estructural de la entidad que se va a guardar en la base de datos
const ItemSchema = new Schema<Car>(
    {
        brand: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        gas: {
            type: String,
            enum: [ 'gasoline',  'electric' ],
            required: true
        },
        model: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    });


// * Creamos un modelo a partir de nuestro Schema
const itemModel = model( 'items', ItemSchema );


export default itemModel;