import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const modelShop = new Schema({
  name:{type:String, required: true},
  shop:{type:String, required: true},
  address:{type:String, required: true},
  password:{type:String, required: true},
  role:{type:String,enum:['admin','user'], default:'user'},
  wallet:{type:String, required: true},
  eth:{type:String, required:true}
});

export default mongoose.model('shop',modelShop);