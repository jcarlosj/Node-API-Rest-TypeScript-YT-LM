import { hash } from "bcryptjs"

const encrypt = async ( pass: string ) => {
    return await hash( pass, 9 );
}

const verified = () => {

}


export {
    encrypt,
    verified
}