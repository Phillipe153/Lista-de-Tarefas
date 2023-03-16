module.exports = (sequelize, DataTypes) => {
  const Prazos = sequelize.define('prazos', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: DataTypes.STRING,
    prioridade: DataTypes.STRING,
    prazo: DataTypes.STRING,
    tarefaId:{ type: DataTypes.INTEGER, foreignKey: true}
  }, {
    timestamps: false,
    tableName: 'prazos',
    underscored: true,
  });

  Prazos.associate = (models) => {
    Prazos.belongsTo(models.tarefas, 
      {foreignKey: 'tarefaId', as: 'tarefas'})
  }

    return Prazos;
  };
  
