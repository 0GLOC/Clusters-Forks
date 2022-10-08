import dotenv from 'dotenv';
import configMinimist from '../utils/minimistArgs.js'

const mode = configMinimist.mode;

dotenv.config({
    path:mode === "PROD"?'./.env.production':'./.env.development'
});

export default {
    mongo: {
        MONGO_URL:process.env.MONGO_URL,
        MONGO_USER:process.env.MONGO_USER,
    }
}