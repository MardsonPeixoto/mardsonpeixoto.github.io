import { DataTypes } from "sequelize";
import { conn } from "../config/conn.js";

export const evidenciaModel = conn.define(
    "evidencias",
    {
        legenda:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: {
                    args: [10, 200],
                    msg: "A legenda deve ter entre 10 a 200 caracteres"
                }
            }
        },
        imagem:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        secao_portfolio_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: false
    }
)