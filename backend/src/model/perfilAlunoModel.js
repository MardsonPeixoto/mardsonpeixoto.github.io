import { DataTypes } from "sequelize";
import { conn } from "../config/conn.js";

export const perfilAlunoModel = conn.define(
    "perfilAluno",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O nome é obrigatório"
                },
                len:{
                    args: [3, 150],
                    msg: "O nome deve possuir entre 3 e 150 caracteres"
                },
            },
        },
        reflexao_pessoal: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "A senha é obrigatória"
                },
                len: {
                    args: [8, 60],
                    msg: "A senha deve possuir entre 8 a 60 caracteres",
                },
            },
        },
        turma_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: false,

        defaultScope: {
            attributes: {
                exclude: ["senha"]
            }
        },

        scopes: {
            comSenha: {
                attributes: {}
            }
        },
    },
)