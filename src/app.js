import express from 'express';
import morgan from 'morgan';
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import router from './routes/usersRoutes.js';

// * settings
const app = express();

// * middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// * render the views
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// *static files
app.use(express.static(join(__dirname, "public")));

// * routes
app.use(router);

export default app