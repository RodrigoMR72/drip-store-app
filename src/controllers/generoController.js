import {Genero} from "../models/Genero.js"

export class GeneroController {

    static criar = async (req, res) => {


            const { codigo, nome } = req.body;

            const genero = { codigo, nome };
          
            const generoDB = await Genero.create(genero);
  
            
          
            res.status(201).json({
              data: generoDB,
              msg: "Genero cadastrado com sucesso!",
            });
          

    }

    static buscarTodos = async (req, res) => {
        const generos = await Genero.find()
        res.status(200).json(generos)
    }

    static buscarPorId = async (req, res) => {
        const id = req.params.id

        if(!id) {
            res.status(422).json('Id não informado!')
            return
        } 

        const genero = await Genero.findById(id)
        res.status(200).json(genero)
        
    }

    }