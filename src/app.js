import express from 'express';
import morgan from 'morgan';
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import router from './routes/usersRoutes.js';


// * settings
const app = express();
const port = 3000;

// * middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// * render the views
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// * running the server
app.listen(port, () => { 
  console.log(`Server is listening on http://localhost:${port}`);
})

// * routes
app.use(router);