const {Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config.connection');

class Post extends {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }
     },
    { sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
    );
    module.exports=Post;