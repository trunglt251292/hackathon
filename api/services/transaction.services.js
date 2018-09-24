import Transaction from '../models/transaction';
import Shop from '../models/shop';
import Product from '../models/products';

export async function getTransactions(options) {
  try{
    let transactions = await Transaction.find({shop:options.shop}).sort({createAt:-1}).limit(options.limit).skip(options.skip).lean();
    let count = await Transaction.count({shop:options.shop});
    let data = await getMetaData(transactions);
    return [count,data];
  }catch (err){
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}

export async function createTransaction(options) {
  try{
    let product = await Product.findById(options.product).lean();
    options.total_price = options.quantity * product.price;
    return await Transaction.create(options);
  }catch (err){
    console.log('err createTransaction : ',err);
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}

export async function deleteTransaction(options) {
  try{
    options.transactions.map(async e => await Transaction.remove({_id:e}));
    return true;
  }catch (err){
    console.log('err deleteTransactions: ',err);
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}

export async function updateStatus(options) {
  try{
    let transactions = await Transaction.findOne({transactionId:options.id});
    if (!transactions){
      return Promise.reject({status:404, success:false, error:'Transaction not found!'})
    }
    transactions.status=options.status;
    await transactions.save();
    return transactions;
  }catch (err){
    console.log('err updateStatus: ',err);
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}

export async function getTransactionByStatus(options) {
  try{
    let transactions = await Transaction.find({status:options.status}).sort({createAt:-1}).skip(options.skip).limit(options.limit).lean();
    let count = await Transaction.count({status:options.status});
    let data = await getMetaData(transactions);
    return [count,data];
  }catch (err){
    console.log('err deleteTransactions: ',err);
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}

export async function getTransactionByType(options) {
  try{
    let transactions = await Transaction.find({type_transaction:options.type}).sort({createAt:-1}).skip(options.skip).limit(options.limit).lean();
    let count = await Transaction.count({type_transaction:options.type});
    let data = await getMetaData(transactions);
    return [count,data];
  }catch (err){
    console.log('err deleteTransactions: ',err);
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}

export async function getMetaData(transactions) {
  try{
    let promise = transactions.map(async e =>{
      e.shop = await Shop.findById(e.shop).lean();
      e.product = await Product.findById(e.product).lean();
      return e;
    });
    return await Promise.all(promise);
  }catch (err){
    console.log('err getMetaData ',err);
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}