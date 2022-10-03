const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Task = sequelize.define('tasks', {
  task_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  task_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  task_date: {
    type: DataTypes.DATEONLY,
  },
  task_date_end: {
    type: DataTypes.DATEONLY,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'НЕ ВЫПОЛНЕНО',
  },
  // subject_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
},{
  timestamps: false,
});

const Material = sequelize.define('materials', {
  material_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  material_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  material_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  material_link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  material_date: {
    type: DataTypes.DATEONLY,
  }
},{
  timestamps: false,
});

const Subject = sequelize.define('subjects', {
  subject_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subject_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},{
  timestamps: false,
});

Subject.hasMany(Task)
Task.belongsTo(Subject)

Subject.hasMany(Material)
Material.belongsTo(Subject)

module.exports = {
  Task, Subject, Material
}
