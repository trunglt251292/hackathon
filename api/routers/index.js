//quan ly routers
import {Router} from 'express';
import RouterExam from './exam.router';
import RouterShop from './shop.router';
import RouterTransaction from './transaction.router';
import RouterProduct from './product.router';

const router = new Router();

router.use('/exam',RouterExam);
router.use('/shop',RouterShop);
router.use('/transaction',RouterTransaction);
router.use('/product',RouterProduct);

export default router;
