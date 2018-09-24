import * as Shop_Services from '../services/shop.services';

export async function createShop(req,res) {
  try{
    let data = req.body;
    let rs = await Shop_Services.createShop(data);
    return res.json({
      success:true,
      data:rs
    })
  }catch (err){
    return res.status(err.status).json(err);
  }
}

export async function userLogin(req,res) {
  try{
    let name = req.body.name;
    let password = req.body.password;
    let options = {
      name,
      password
    };
    let rs = await Shop_Services.userLogin(options);
    return res.json({
      success:true,
      data:rs
    })
  }catch (err){
    return res.status(err.status).json(err);
  }
}