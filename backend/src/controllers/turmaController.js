import { turmaModel } from "../model/turmaModel.js"
import { tratarErro } from "../utils/erroHandler.js"

export const cadastrarTurma = async (request, response) => {
    const { serie, itinerario } = request.body

    if(!serie || !itinerario){
        return response.status(400).json({ message: "Série e Itinerário são obrigatórios."})
    }

    try {
        const turmaExiste = await turmaModel.findOne({
            where: { serie, itinerario }
        })

        if(turmaExiste){
            return response.status(409).json({
                message: "Essa turma já está cadastrada"
            })
        }

        const dados = {
            serie,
            itinerario
        }

        await turmaModel.create(dados)

        response.status(201).json({ message: "Turma Criada"})
    } catch (error) {
        await tratarErro(error, response)
    }
}

export const listarTurma = async (request, response) => {
    try {
        const turmas = await turmaModel.findAll()

        response.status(200).json(turmas)
    } catch (error) {
        await tratarErro(error, response);
    }
}

export const buscarTurmaID = async (request, response) => {
    const { id } = request.params

    try {
        const turma = await turmaModel.findByPk(id)

        if(!turma){
            return response.status(404).json({message: "Turma não encontrada"})
        }

        response.status(200).json(turma)
    } catch (error) {
        await tratarErro(error, response);
    }
}

export const atualizarTurma = async (request, response) => {
    const { id } = request.params

    try {
        const turma = await turmaModel.findByPk(id)

        if (!turma) {
           return response.status(404).json({ message: "Turma não encontrada!" });
        }

        await turma.update(request.body)

        response.status(200).json(turma)
    } catch (error) {
        await tratarErro(error, response);
    }
}

export const deletarTurma = async (request, response) => {
    const { id } = request.params
    try {
        const turma = await turmaModel.findByPk(id)

        if (!turma) {
            return response.status(404).json({ message: "Turma não encontrado!" });
        }

        await turma.destroy()

        response.status(204).send()
    } catch (error) {
        await tratarErro(error, response);
    }
}