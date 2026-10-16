import { DataTypes } from "sequelize";
import { conn } from "../config/conn.js";

export const turmaModel = conn.define(
    "turma",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        serie: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { 
                    msg: "A série é obrigatória" 
                },
                len: { 
                    args: [2, 20], 
                    msg: "A série deve ter entre 2 e 20 caracteres" 
                }
            }
        },
        itinerario: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { 
                    msg: "O itinerário é obrigatório" 
                },
                len: {
                    args: [3, 100], 
                    msg: "O itinerário deve ter entre 3 e 100 caracteres" 
                }
            }
        }
    },
    {
        timestamps: false,
    }
);
