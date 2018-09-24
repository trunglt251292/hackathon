import * as Transaction_Service from '../services/transaction.services'

export async function createTransaction(req,res) {
  try{
    let data = req.body;
    let rs = await Transaction_Service.createTransaction(data);
    return res.json({
      success:true,
      data:rs
    })
  }catch (err){
    return res.status(err.status).json(err);
  }
}

export async function deleteTransaction(req,res) {
  try{
    let transactions = req.body.transactions;
    let rs = await Transaction_Service.deleteTransaction({transactions});
    return res.json({
      success:rs
    })
  }catch (err){
    return res.status(err.status).json(err);
  }
}

export async function updateStatus(req,res) {
  try{
    let id = req.params.transactionid;
    let status = req.query.status;
    let data = await Transaction_Service.updateStatus({id,status});
    return res.json({
      success:true,
      data
    })
  }catch (err){
    return res.status(err.status).json(err);
  }
}
export async function getTransactionByStatus(req,res) {
  try{
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let skip = (page - 1)*limit;
    let status = req.query.status;
    let rs = await Transaction_Service.getTransactionByStatus({status, skip, limit});
    return res.json({
      total_page:Math.ceil(rs[0]/limit),
      page:page,
      limit:limit,
      success:true,
      data:rs[1]
    })
  }catch (err){
    return res.status(err.status).json(err);
  }
}

export async function getTransactionByShop(req,res) {
  try{
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let skip = (page - 1)*limit;
    let shop = req.params.shop;
    let rs = await Transaction_Service.getTransactions({shop, skip, limit});
    return res.json({
      total_page:Math.ceil(rs[0]/limit),
      page:page,
      limit:limit,
      success:true,
      data:rs[1]
    })
  }catch (err){
    return res.status(err.status).json(err);
  }
}

export async function getTransactionByType(req,res) {
  try{
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let skip = (page - 1)*limit;
    let type = req.params.type_transaction;
    let rs = await Transaction_Service.getTransactionByType({type, skip, limit});
    return res.json({
      total_page:Math.ceil(rs[0]/limit),
      page:page,
      limit:limit,
      success:true,
      data:rs[1]
    })
  }catch (err){
    return res.status(err.status).json(err);
  }
}