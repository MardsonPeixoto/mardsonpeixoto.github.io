import { DataTypes } from "sequelize";
import { conn } from "../config/conn.js";

export const secaoPortfolioModel = conn.define(
    "secaoPortfolio",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tipo_secao: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { 
                    msg: "O tipo de seção é obrigatório" 
                },
                len: { 
                    args: [2, 80], 
                    msg: "O tipo de seção deve ter entre 2 e 80 caracteres" 
                }
            }
        },
        texto: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { 
                    msg: "O conteúdo em texto da seção é obrigatório" 
                }
            }
        },
        materia_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        perfil_aluno_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: false,
    }
);
