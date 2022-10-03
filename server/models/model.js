const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Task = sequelize.define('tasks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
  },
  date_end: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'НЕ ВЫПОЛНЕНО',
  },
  // subject_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
});

const Material = sequelize.define('materials', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
  }
});

const Subject = sequelize.define('subjects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

Subject.hasMany(Task)
Task.belongsTo(Subject)

Subject.hasMany(Material)
Material.belongsTo(Subject)

module.exports = {
  Task, Subject, Material
}
