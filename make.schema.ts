import mongoose from "mongoose";
const {Schema} = mongoose;

const makeSchema = new Schema({
  nome: String, //tipo rimel, blush, sombra
  marca: String, //dior, mac, 
  valor: Number,
  peso: Number,
  cor: String,

}, {timestamps: true});

export default mongoose.model('Make', makeSchema)