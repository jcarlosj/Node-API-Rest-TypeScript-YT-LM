import { Jwt, JwtPayload, sign, verify } from 'jsonwebtoken';


const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'g3ner1c-t0k3n';


// Generate Token
const generateToken = ( id: number, emailUser: string ) => {
    return sign({ 
        id,
        email: emailUser 
    }, JWT_SECRET_KEY, { 
        expiresIn: '90s'
    });
}

// Verify valid token
const verifyToken = ( token: string ) : string | JwtPayload => {
    return verify( token, JWT_SECRET_KEY );
}

export {
    generateToken as signToken,
    verifyToken
};