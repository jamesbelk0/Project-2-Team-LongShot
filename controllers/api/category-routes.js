const router = require('express').Router();
// TODO: INSERT THE MODEL NAMES THAT WILL BE USED
const {Category} = require('../../models');

// to get all post
router.get('/', (req,res) => {
    Category.findAll
});

// to get single post
router.get('/:id', (req,res) => {

});

// to create a category
router.post('/', (req,res) => {

});

module.exports = router;