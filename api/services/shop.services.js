import ShopModel from '../models/shop';

export async function createShop(options) {
  try{
    let user = await ShopModel.findOne({name:options.name}).lean();
    if (user){
      return Promise.reject({status:400, success:false, error:'User Have Exist!'})
    }
    return await ShopModel.create(options);
  }catch (err){
    console.log(err);
    return Promise.reject({status:500, success:false, error:'Internal server error!'})
  }
}

export async function userLogin(options) {
  try{
    let user = await ShopModel.findOne({name:options.name, password:options.password}).lean();
    if (!user){
      return Promise.reject({status:404, success:false, error:'User not found'});
    }
    return user;
  }catch (err){
    console.log(err);
    return Promise.reject({status:500, success:false, error:'Internal server error'});
  }
}