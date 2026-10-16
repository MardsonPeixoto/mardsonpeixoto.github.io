import { DataTypes } from "sequelize";
import { conn } from "../config/conn.js";

export const materiaModel = conn.define(
    "materia",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_disciplina: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O nome da disciplina é obrigatório"
                },
                len: {
                    args: [3, 100],
                    msg: "O nome da disciplina deve possuir entre 3 e 100 caracteres"
                }
            }
        },
        instituicao: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                msg: "A instituição é obrigatória",
                },
                isIn: {
                args: [["SESI", "SENAI"]],
                msg: "A instituição deve ser SESI ou SENAI",
                },
            },
        },
    }
)