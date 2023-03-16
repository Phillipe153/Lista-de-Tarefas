module.exports = (sequelize, DataTypes) => {
  const Tarefas = sequelize.define('tarefas', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tarefa: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'tarefas',
    underscored: true,
  });

  Tarefas.associate = (models) => {
    Tarefas.hasOne(models.prazos,
      {foreignKey: 'tarefaId', as: 'prazos' });
  }

    return Tarefas;
  };
  
