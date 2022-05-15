const router = require('express').Router();
// const req = require('express/lib/request');
const { User, Post} = require('../../models');

// GET to get all of the users
// GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    User.findAll({
        attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Get One User
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
      include: [
          {
              model: Post,
              attributes: ['id', 'title', 'text','image_url', 'category', 'created_at']
          }
      ]
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//POST /api/user/
router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => {
          req.session.save(()=> {
              req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json(dbUserData)
          })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // LOGIN
  router.post('/login', (req, res) => {
    User.findOne({
        where: {
          username: req.body.username
        }
      }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user with that username!' });
          return;
        }
    
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
        }

        req.session.save(()=>{
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
  });

// LOGOUT
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res
        .status(204)
        .json({ message: 'You are now logged out!' })
        .end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;