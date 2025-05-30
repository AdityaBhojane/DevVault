import express, { NextFunction, Request, Response } from "express"
import appRouter from "./routes/appRouter";
import cors from "cors";


const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('GLOBAL ERROR HANDLER:', err);
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message || 'Unknown Error',
    });
  });
  
app.use('/api',appRouter)

app.get('/ping',(req,res)=>{
    res.json({
        message:'pong',
        server:'live'
    })
});

app.listen(3001,()=> console.log('server is running on port 3001'))