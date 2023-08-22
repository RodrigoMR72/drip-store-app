import express from "express";
import { GeneroController } from "../controllers/generoController.js";


export const routerGenero = express.Router();


routerGenero
.post('/genero', GeneroController.criar)
.get('/generos', GeneroController.buscarTodos)
.get('/genero/:id', GeneroController.buscarPorId)
