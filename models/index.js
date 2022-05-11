const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Category = require('./Category');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreighKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Category,
    as: 'category_id',
    foreighKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Category,
    as: 'category_id',
    foreignKey: 'post_id'
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

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});


module.exports = { User, Comment, Post };