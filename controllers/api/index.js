const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const categoryRoutes = require('./category-routes')

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
router.use('/category', categoryRoutes);

module.exports = router;