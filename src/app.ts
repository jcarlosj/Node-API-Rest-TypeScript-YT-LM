import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const 
    PORT = process.env.PORT || 3001,
    app = express();

// Middlewares
app.use( cors() );      // Cross-Origin Resource Sharing (CORS)

app.listen( PORT, () => console.log( `Escuchando por el puerto ${ PORT }` ) );