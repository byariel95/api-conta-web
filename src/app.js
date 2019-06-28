import express,{json} from 'express';
import morgan from 'morgan';


//routes inmports
import ClientRoutes from './routes/ClientRoutes'

//initializer
const app = express();

//middlewares 
app.use(morgan('dev'));
app.use(json());

//use routes
app.use('/api/users',ClientRoutes);


export default app;