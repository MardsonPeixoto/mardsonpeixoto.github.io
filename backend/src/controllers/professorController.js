import { professorModel } from "../model/professorModel.js"
import { tratarErro } from "../utils/erroHandler.js"

export const cadastrarProfessor = async (request, response) => {
    const { nome } = request.body

    if(!nome){
        return response.status(400).json({ 
            message: "nome é obrigatório."
        })
    }

    try {
        const dados = {
            nome,
        }

        await professorModel.create(dados)

        response.status(201).json({ message: "Professor cadastrado"})
    } catch (error) {
        await tratarErro(error, response)
    }
}