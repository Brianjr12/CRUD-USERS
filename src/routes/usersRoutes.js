import { Router } from 'express';

import { userGet, userSend, userDelete } from '../controllers/usersControllers.js';

const router = Router();


router.get("/", (req, res) => {

})
router.get("/test", userGet)

router.post("/test", userSend);

router.put;

router.delete("/test/:id", userDelete);

export default router;