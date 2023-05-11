import 'dotenv/config';
import { connect } from 'mongoose';

// Configura conexión a DB MongoDB
async function dbConnect() : Promise<void> {
    const DB_URI = <string> process.env.DB_URI;     // Definir variable de entorno DB_URI en .env
    await connect( DB_URI );
}


export default dbConnect;