import { Router } from 'express';

import { userGet, userCreate, userDelete } from '../controllers/usersControllers.js';

const router = Router();

router.get("/", userGet)

router.post("/add", userCreate);

router.put;

router.get("/delete/:id", userDelete);

export default router;