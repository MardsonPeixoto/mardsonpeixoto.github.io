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