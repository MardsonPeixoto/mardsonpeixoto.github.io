import { turmaModel } from "../model/turmaModel.js"

export const cadastrarTurma = async (request, response) => {
    const { serie, itinerario } = request.body

    try {
        const dados = {
            serie,
            itinerario
        }

        await turmaModel.create(dados)

        response.status(201).json({ message: "Turma Criada"})
    } catch (error) {
        return response.status(500).json({ message: "Erro interno do servidor" });
    }
}

export const listarTurma = async (request, response) => {
    try {
        const turmas = await turmaModel.findAll()

        response.status(200).json(turmas)
    } catch (error) {
        return response.status(500).json({ message: "Erro interno do servidor" });
    }
}

export const buscarTurmaID = async (request, response) => {
    const { id } = request.params

    try {
        const turmas = await turmaModel.findByPk(id)

        if(!turmas){
            response.status(404).json({message: "Turma não encontrada"})
        }

        response.status(200).json(turmas)
    } catch (error) {
        return response.status(500).json({ message: "Erro interno do servidor" });
    }
}

export const atualizarTurma = async (request, response) => {
    const { id } = request.params

    try {
        const turma = await turmaModel.findByPk(id)

        if (!turma) {
            response.status(404).json({ message: "Turma não encontrada!" });
        return;
        }

        await turma.update(request.body)

        response.status(200).json(turma)
    } catch (error) {
        return response.status(500).json({ message: "Erro interno do servidor" });
    }
}

export const deletarTurma = async (request, response) => {
    try {
        const turma = await turmaModel.findByPk(request.params.id)

        if (!turma) {
            response.status(404).json({ message: "Turma não encontrado!" });
        return;
        }

        await turma.destroy()

        response.status(204).send()
    } catch (error) {
        return response.status(500).json({ message: "Erro interno do servidor" });
    }
}