// // require the model and datatypes form sequelize
// const { Model, DataTypes } = require('sequelize');
// // require the connection
// const sequelize = require('../config/config');

// class Category extends Model {}

// Category.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         category_name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         category_id: {
//             type: DataTypes.id,
//             references: {
//                 model: 'post',
//                 key: 'id'
//             }
//         }
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'category'
//     }
// );

// module.exports = Category;