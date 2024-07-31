const mongoose=require('mongoose')
const { Schema } = mongoose;

//!defining schema
const productSchema=new Schema({
  
  title: {type:String,required:true,unique:true},
  description:String ,
  price: {type:Number,min:[0,"price lower than minimum"],required:true},
  discountPercentage: {type:Number,min:[0,"discount lower than minimum"],max:[50,'discount greater than max allowed']},
  rating: {type:Number,min:[0,"ratinng lower than minimum"], max:[10,"ratinng greater than maximum"],required:true,default:0},
  
  brand: {type:String,required:true} ,
  category: {type:String,required:true},
  thumbnail: {type:String,required:true},
  images: [String]
}
)


// !Model
exports. Product=mongoose.model('Product',productSchema)
