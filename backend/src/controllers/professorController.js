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

export const listarProfessor = async (request, response) => {
    try {
        const professor = await professorModel.findAll()

        response.status(200).json(professor)
    } catch (error) {
        await tratarErro(error, response)
    }
}

export const buscarProfessorID = async (request, response) => {
    const { id } = request.params

    try {
        const professor = await professorModel.findByPk(id)

        if(!professor){
            return response.status(404).json({
                message: "Professor não encontrado"
            })
        }

        response.status(200).json(professor)
    } catch (error) {
        await tratarErro(error, response);
    }
}

export const atualizarProfessor = async (request, response) => {
    const { id } = request.params

    try {
        const professor = await professorModel.findByPk(id)

        if (!professor) {
            return response.status(404).json({
                message: "Professor não encontrado!"
            });
        }

        await professor.update(request.body)

        response.status(200).json(professor)
    } catch (error) {
        await tratarErro(error, response);
    }
}

export const deletarProfessor = async (request, response) => {
    const { id } = request.params

    try {
        const professor = await professorModel.findByPk(id)

        if (!professor) {
            return response.status(404).json({
                message: "Professor não encontrado!" 
            });
        }

        await professor.destroy()

        response.status(204).send()
    } catch (error) {
        await tratarErro(error, response);
    }
}