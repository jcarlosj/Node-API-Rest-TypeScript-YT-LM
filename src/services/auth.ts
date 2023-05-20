import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/user";
import { signToken } from "../utils/jwt.handle";
import { encrypt, verifyPass } from "../utils/pass.handle";


const registerNewUser = async ( { email, password } : Auth ) => {
    const userFound = await UserModel.findOne({ email });

    if ( userFound ) return 'USER_ALREADY_EXISTS';

    const hashPassword = await encrypt( password );

    return await UserModel.create({ 
        email, 
        password: hashPassword 
    });
}

const loginUser = async ( { email, password } : Auth ) => {
    const userFound = await UserModel.findOne({ email });
    if ( ! userFound ) 
        return 'NOT_FOUND_USER';

    const isValidPassword = await verifyPass( password, userFound.password );
    if( ! isValidPassword ) 
        return 'INCORRECT_PASSWORD';

    return {
        user: userFound,
        token: signToken( userFound.email )    // Genera y retorna un token
    }
}


export { 
    registerNewUser,
    loginUser 
};