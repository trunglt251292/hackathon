import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const modelProduct = new Schema({
  name:{type:String, required:true},
  shop:{type:Schema.ObjectId, required:true},
  image:{type:String, required:true},
  createAt:{type:Date, default:Date.now()},
  price:{type:Number, required:true},
  quantity:{type:Number, required:true}
});

export default mongoose.model('product',modelProduct);