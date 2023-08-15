
import mongoose, { Types } from "mongoose";

export const Produto = mongoose.model('Produto', {
    tipo : String,
    nome : String,
    genero : String,
    preco : Number,
    desconto : Number
})