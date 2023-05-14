import { hash, compare } from "bcryptjs"

const encrypt = async ( pass: string ) => {
    return await hash( pass, 9 );
}

const verifyPass = async ( pass: string, passHash: string ) => {
    return await compare( pass, passHash );
}


export {
    encrypt,
    verifyPass
}