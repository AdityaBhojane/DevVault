import express from "express"
import appRouter from "./routes/appRouter";


const app = express();
app.use(express.json());

app.use('/api',appRouter)

app.get('/ping',(req,res)=>{
    res.json({
        message:'pong',
        server:'live'
    })
});

app.listen(3001,()=> console.log('server is running on port 3001'))