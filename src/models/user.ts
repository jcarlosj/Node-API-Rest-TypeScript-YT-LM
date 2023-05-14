import { Schema, Types, Model, model } from 'mongoose';
import { User } from '../interfaces/user.interface';


// * Schema: Es una representacion estructural de la entidad que se va a guardar en la base de datos
const authSchema = new Schema<User>({
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true
    },
    name: {
        type: 'string',
        required: false
    },
    description: {
        type: 'string',
        default: 'User description'
    }
},
{
    timestamps: true,
    versionKey: false,
});


// * Creamos un modelo a partir de nuestro Schema
const userModel = model( 'users', authSchema );


export default userModel;