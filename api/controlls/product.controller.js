import * as Product_Services from '../services/product.service';

export async function createProduct(req,res) {
  try{
    let data = req.body;
    return res.json({
      success:true,
      data: await Product_Services.createProduct(data)
    })
  }catch (err){
    return res.status(err.status).json(err);
  }
}

export async function getAllProduct(req,res) {
  try{
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let skip = (page - 1)*limit;
    let rs = await Product_Services.getAllProduct({skip, limit});
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

export async function getProductByShop(req,res) {
  try{
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let skip = (page - 1)*limit;
    let shop = req.params.shop;
    let rs = await Product_Services.getProductByShop({shop ,skip, limit});
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
