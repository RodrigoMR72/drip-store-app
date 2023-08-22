import mongoose, { Schema, Types } from "mongoose";

const generoSchema = new Schema(
    {
    nome: { type: String, required: true },
    codigo: {
        type: Number,
        unique: true,
        required: true
    }
    
})

const Genero = mongoose.model(`Genero`, generoSchema)

export {Genero, generoSchema}