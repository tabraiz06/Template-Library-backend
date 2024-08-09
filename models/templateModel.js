const mongoose= require('mongoose')
const templateSchema = new mongoose.Schema({
  title: String,
  description: String,
  previewUrl: String,
  downloadUrl: String,
  imageUrl: String, 
});

const Template = mongoose.model("Template", templateSchema);
module.exports=Template