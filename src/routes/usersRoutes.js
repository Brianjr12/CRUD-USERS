import { Router } from "express";

import {
  userGet,
  userCreate,
  userDelete,
  userGetUpdate,
  userUpdate,
  about,
} from "../controllers/usersControllers.js";

const router = Router();

router.get("/", userGet);
router.post("/add", userCreate);
router.get("/update/:id", userGetUpdate);
router.post("/updated/:id", userUpdate);
router.get("/delete/:id", userDelete);
router.get("/about", about);

export default router;
