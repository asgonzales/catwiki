import dotenv from 'dotenv';
dotenv.config();


const config = {
    catApiKey: process.env.APIKEY || null,
    port: process.env.API_PORT || '3001',
    cors: process.env.CORS || 'localhost:3000'
}


export default config;