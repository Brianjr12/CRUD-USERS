import app from './app.js'
import { PORT } from "./config.js";

// * running the server
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
