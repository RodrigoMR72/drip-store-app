import mongoose, { Types } from "mongoose";

export default Genero = mongoose.model('Genero', {
    nome: String,
    codigo: Number
})