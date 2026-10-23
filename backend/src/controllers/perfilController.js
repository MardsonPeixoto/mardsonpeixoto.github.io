import { perfilAlunoModel } from "../model/perfilAlunoModel.js";
import { tratarErro } from "../utils/erroHandler.js";

export const cadastrarUsuario = async (request, response) => {
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

        response.status(201).json({message: "Usuário criado com sucesso"})
    } catch (error) {
        await tratarErro(error, response)
    }
}