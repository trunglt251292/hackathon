import {Router} from 'express';
import * as Product_Controller from '../controlls/product.controller';
const router = new Router();

router.route('/create').post(Product_Controller.createProduct);
router.route('/getAllProduct')
  .get(Product_Controller.getAllProduct);
router.route('/:shop')
  .get(Product_Controller.getProductByShop);
export default router;