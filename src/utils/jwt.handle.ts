import { sign, verify } from 'jsonwebtoken';


const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'g3ner1c-t0k3n';


// Generate Token
const signToken = ( emailUser: string ) => {
    return sign({ email: emailUser }, JWT_SECRET_KEY, { 
        expiresIn: '2h'
    });
}

const verifyToken = async () => {

}


export {
    signToken,
    verifyToken
};