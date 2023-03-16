const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Prazos = sequelize.define('prazos', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: DataTypes.STRING,
    prioridade: DataTypes.STRING,
    prazo: DataTypes.DATE
  }, {
    timestamps: false,
    tableName: 'prazos',
  });

  Prazos.associate = (models) => {
    Prazos.belongsTo(models.Tarefas, 
      {foreignKey: 'tarefaId', as: 'tarefas'})
  }

    return Prazos;
  };
  
