import express from "express";
import { ProdutoController } from "../controllers/produtoController.js";


export const routerProduto = express.Router();


routerProduto
.post('/produto', ProdutoController.criar)
.put('/produto/:id', ProdutoController.atualizar)
.get('/produto', ProdutoController.buscarTodos)
.get('/produto/:id', ProdutoController.buscarPorId)
.delete('/produto/:id', ProdutoController.excluir)