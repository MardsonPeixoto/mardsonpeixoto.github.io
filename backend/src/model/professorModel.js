import { DataTypes } from "sequelize";
import { conn } from "../config/conn.js";

export const professorModel = conn.define(
    "professores",
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
                    msg: "O nome do professor é obrigatório" 
                },
                len: { 
                    args: [3, 100], 
                    msg: "O nome deve ter entre 3 e 100 caracteres" }
            }
        }
    },
    {
        timestamps: false,
    }
);
