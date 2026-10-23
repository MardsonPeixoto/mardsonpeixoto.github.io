import { perfilAlunoModel } from "../model/perfilAlunoModel.js";
import { tratarErro } from "../utils/erroHandler.js";

export const cadastrarPerfil = async (request, response) => {
    const { nome, reflexao_pessoal, senha, verificarSenha, turma_id} = request.body

    if(!nome || !senha || !turma_id){
        return response.status(400).json({
            message: "nome, senha e turma_id são obrigatórios."
        })
    }

    if(senha !== verificarSenha){
        return response.status(401).json({
            message: "As senhas precisam ser iguais"
        })    
    }

    try {
        const dados = {
            nome, 
            reflexao_pessoal,
            turma_id,
            senha,
        }

        await perfilAlunoModel.create(dados)

        response.status(201).json({message: "Perfil criado com sucesso"})
    } catch (error) {
        await tratarErro(error, response)
    }
}

export const buscarPerfil = async (request, response) => {
    try {
        const perfil = await perfilAlunoModel.findAll()

        response.status(200).json(perfil)
    } catch (error) {
        await tratarErro(error, response)
    }
}

export const buscarPerfilID = async (request, response) => {
    const { id } = request.params

    try {
        const perfil = await perfilAlunoModel.findByPk(id)

        if(!perfil){
            return response.status(404).json({
                message: "Turma não encontrada"
            })
        }

        response.status(200).json(perfil)
    } catch (error) {
        await tratarErro(error, response)
    }
}