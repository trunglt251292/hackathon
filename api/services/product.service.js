import Product from '../models/products';
import Shop from '../models/shop';

export async function createProduct(options) {
  try{
    let shop = await Shop.findById(options.shop).lean();
    if(!shop){
      return Promise.reject({status:400, success:false, error:'Shop not found'});
    }
    return await Product.create(options);
  }catch (err){
    console.log(err);
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}

export async function getAllProduct(options) {
  try{
    let products = await Product.find({}).sort({createAt:-1}).skip(options.skip).limit(options.limit).lean();
    let count = await Product.count({});
    let data = await getMetaData(products);
    return [count,data];
  }catch (err){
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}

export async function getProductByShop(options) {
  try{
    let products = await Product.find({shop:options.shop}).sort({createAt:-1}).skip(options.skip).limit(options.limit).lean();
    let count = await Product.count({shop:options.shop});
    let data = await getMetaData(products);
    return [count,data];
  }catch (err){
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}

export async function getMetaData(products) {
  try{
    let promise = products.map(async e =>{
      e.shop = await Shop.findById(e.shop).lean();
      return e;
    });
    return await Promise.all(promise);
  }catch (err){
    return Promise.reject({status:500, success:false, error:'Internal server error!'});
  }
}