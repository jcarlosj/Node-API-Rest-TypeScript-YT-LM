import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/user";
import { encrypt } from "../utils/pass.handle";


const registerNewUser = async ( { email, password } : Auth ) => {
    const userFound = await UserModel.findOne({ email });

    if ( userFound ) return 'USER_ALREADY_EXISTS';

    const hashPassword = await encrypt( password );

    return await UserModel.create({ 
        email, 
        password: hashPassword 
    });
}


export { registerNewUser };