
import { Router } from 'express';
import verifyJWT from '../middleware/verifyJWT'
import chatController from '../controllers/chatController';


const router: Router = Router();


router.use(verifyJWT)

router
  .route("/")
  .get(chatController.getSummary)


  module.exports = router