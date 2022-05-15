const User = require("./User");
const Post = require("./Post");
const Category = require("./Category");

User.hasMany(Post, {
    // through: Category,
    // as: 'categories',
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    // through: Category,
    // as: 'categories',
    foreignKey: 'post_id',
});

Category.belongsTo(User, {
    foreignKey: 'user_id'
});

Category.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Category, {
    foreignKey: 'user_id'
});

Post.hasMany(Category, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Category };