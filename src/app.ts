import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { router } from './routes';      // importa ./routes/index.ts

const 
    PORT = process.env.PORT || 3001,
    app = express();

// Middlewares
app.use( cors() );      // Cross-Origin Resource Sharing (CORS)
app.use( router );      // Item Router

app.listen( PORT, () => console.log( `Escuchando por el puerto ${ PORT }` ) );