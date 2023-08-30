import express from 'express';
import router from './routes/usersRoutes.js';
import morgan from 'morgan';

// * settings
const app = express();
const port = 3000;

// * middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// * running the server
app.listen(port, () => { 
  console.log(`Server is listening on http://localhost:${port}`);
})

// * routes
app.use(router);