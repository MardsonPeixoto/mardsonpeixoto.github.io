import { evidenciaModel } from "./evidenciaModel.js";
import { materiaModel } from "./materiaModel.js";
import { perfilAlunoModel } from "./perfilAlunoModel.js";
import { professorModel } from "./professorModel.js";
import { secaoPortfolioModel } from "./secaoPortfolioModel.js";
import { turmaModel } from "./turmaModel.js";

// 1:N
turmaModel.hasMany(perfilAlunoModel, { foreignKey: "turma_id" });
perfilAlunoModel.belongsTo(turmaModel, { foreignKey: "turma_id" });

// 1:N
perfilAlunoModel.hasMany(secaoPortfolioModel, { foreignKey: "perfil_aluno_id" });
secaoPortfolioModel.belongsTo(perfilAlunoModel, { foreignKey: "perfil_aluno_id" });

// 1:N
materiaModel.hasMany(secaoPortfolioModel, { foreignKey: "materia_id" });
secaoPortfolioModel.belongsTo(materiaModel, { foreignKey: "materia_id" });

// 1:N
secaoPortfolioModel.hasMany(evidenciaModel, { foreignKey: "secao_portfolio_id" });
evidenciaModel.belongsTo(secaoPortfolioModel, { foreignKey: "secao_portfolio_id" });

// N:N
materiaModel.belongsToMany(professorModel, { 
    through: "materia_professor", 
    foreignKey: "materia_id", 
    timestamps: false 
});
professorModel.belongsToMany(materiaModel, { 
    through: "materia_professor", 
    foreignKey: "professor_id", 
    timestamps: false 
});

export {
    evidenciaModel,
    materiaModel,
    perfilAlunoModel,
    professorModel,
    secaoPortfolioModel,
    turmaModel
};
