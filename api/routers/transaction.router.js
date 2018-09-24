import {Router} from 'express';
import * as Transaction_Controller from '../controlls/transaction.controller';

const router = new Router();

router.route('/getTransactions').get(Transaction_Controller.getTransactionByStatus);
router.route('/:shop').get(Transaction_Controller.getTransactionByShop);
router.route('/create')
  .post(Transaction_Controller.createTransaction);
router.route('/delete')
  .delete(Transaction_Controller.deleteTransaction);
router.route('/:transactionid')
  .put(Transaction_Controller.updateStatus);


export default router;