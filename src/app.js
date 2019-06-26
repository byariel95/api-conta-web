import express,{json} from 'express';
import morgan from 'morgan';

import ClientRouts from './routes/ClientRoutes'


const app = express();

//middlewares 
app.use(morgan('dev'));
app.use(json());

app.use(ClientRouts);






export default app;