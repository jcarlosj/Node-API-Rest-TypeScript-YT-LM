import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/user";


const registerNewUser = async ( { email, password } : Auth ) => {
    const userFound = await UserModel.findOne({ email });

    if ( userFound ) return 'USER_ALREADY_EXISTS';

    return await UserModel.create({ email, password });
}


export { registerNewUser };