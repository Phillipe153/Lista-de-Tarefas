const prazos = require("./prazos");

module.exports = (sequelize, DataTypes) => {
  const Tarefas = sequelize.define('tarefas', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tarefas: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'tarefas',
  });

  Tarefas.associate = (models) => {
    Tarefas.hasOne(models.Prazos,
      {foreignKey: 'tarefaId', as: 'prazos' });
  }

    return Tarefas;
  };
  
