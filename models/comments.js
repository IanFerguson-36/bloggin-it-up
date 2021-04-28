const {Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config.connection');

class Comment extends {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        content: {
            type: DataTypes.STRING

        },
        post_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,

        },
     sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
    );
    module.exports=comment;