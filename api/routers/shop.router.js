import {Router} from 'express';
import * as ControllerShop from '../controlls/shop.controller';

const router = new Router();

router.route('/create')
      .post(ControllerShop.createShop);
router.route('/login')
      .post(ControllerShop.userLogin);
router.route('/:id')
  .put(ControllerShop.updateShop);
export default router;