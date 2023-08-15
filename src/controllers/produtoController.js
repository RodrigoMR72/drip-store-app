import moment from "moment/moment.js";
import {Produto} from "../models/Produto.js"

export class ProdutoController {

    static criar = async (req, res) => {


            const { tipo, nome, genero, preco, desconto } = req.body;

            const produto = { tipo, nome, genero, preco, desconto };
          
            const produtoDB = await Produto.create(produto);

  
          
            res.status(201).json({
              data: produtoDB,
              msg: "Produto cadastrado com sucesso!",
            });
          

    }

    static buscarTodos = async (req, res) => {
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    }

    static buscarPorId = async (req, res) => {
        const id = req.params.id

        if(!id) {
            res.status(422).json('Id não informado!')
            return
        } 

        const produto = await Produto.findById(id)
        res.status(200).json(produto)
        
    }

    static atualizar = async (req, res) => {

   
            const id = req.params.id;
          
            const { tipo, nome, genero, preco, desconto } = req.body
          
            const produto = { tipo, nome, genero, preco, desconto };

            /*
            Produto.updatesOne({_id : id}, produto); -> sem o await retorna o objeto completo, inclusive com a propriedade _update o qual contem o objeto atualizado, mas não efetiva a atualização do objeto, sendo necessário utilizar o await.

            Produto.updatesOne({_id : id}, produto); -> com o await retorna o objeto que confirma se o que foi enviado foi atualizado, no caso, a propriedade matchedCount. Objeto completo abaixo:
            
            {
                acknowledged: true,
                modifiedCount: 0,
                upsertedIs: null,
                upsertedCount: 0,
                matchedCount: 1 (este demosntra que foi atualizado)
            }

            Usando o await o objeto atualizado não é retornado no response.
            */
          
            const produtoBD = await Produto.updateOne({_id: id}, produto);

            console.log(produtoBD)
       
            res.status(200).json({

                // data: produtoBD._update,
                 msg: `O produto ${produto.nome} foi atualizado com sucesso!!!`

            });
          
              
    }

    static excluir = async (req, res) => {

        const id = req.params.id;
      
        const produtoBD = await Produto.findOne({_id: id});

        console.log(produtoBD)
      
        await Produto.deleteOne({_id: produtoBD.id});

        let dateDeleted = moment(new Date()).format('DD/MM/YYY hh:mm:ss')
      
        res.status(200).json({

        
            data: dateDeleted,
            
            msg: `Produto deletado com sucesso`

        });
    }
}