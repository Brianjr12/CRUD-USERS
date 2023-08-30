import { Router } from 'express';
import { userGet, userSend } from '../controllers/usersControllers.js';

const router = Router();

router.get("/", (req, res) => {
  res.send("welcome")
  
})
router.get("/test", userGet)

router.post("/test", userSend);

router.put;

router.delete;

export default router;