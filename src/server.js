import express from 'express'
import * as dotenv from 'dotenv';
import cors from 'cors'
import router from './routes/sendEmailRoute.js';

dotenv.config()


const app = express();
const PORT = process.env.PORT || 5001

app.use(express.json())
app.use(cors(
    {
        origin: ['http://localhost:5173', 'https://ralph-reeven.vercel.app'],
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type'],
    }
))

app.use('/api',router)

app.listen(PORT, ()=>{
    console.log(`This server is running in http://localhost:${PORT}`);
    
})