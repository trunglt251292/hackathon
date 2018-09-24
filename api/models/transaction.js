import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const modelTransaction = new Schema({
  product:{type:Schema.ObjectId, required:true},
  shop:{type:Schema.ObjectId,required:true},
  nameBuy:{type:String, required:true},
  quantity:{type:Number, required:true},
  total_price:{type:Number, required:true},
  type_transaction:{type:String, enum:['normal','security'],required:true, default:'normal'},
  numberPhone:{type:String, required:true},
  transactionId:{type:String, required:true},
  address:{type:String, required:true},
  createAt:{type:Date, default:Date.now()},
  status:{type:String, enum:['reject','waiting','success'], default:'waiting'}
});

export default mongoose.model('transaction', modelTransaction);