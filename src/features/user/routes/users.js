const express = require('express');
const router = express.Router();
const repository = require('../repositories/user_repository');

// Define a route
router.get('/users', async (req, res) => {
    const users = await repository.fetch();
    res.send('Users: ' + users.length);// this gets executed when user visit http://localhost:3000/user
});

router.get('/101', (req, res) => {
    res.send('this is user 101 route');// this gets executed when user visit http://localhost:3000/user/101
});

router.get('/102', (req, res) => {
    res.send('this is user 102 route');// this gets executed when user visit http://localhost:3000/user/102
});

// export the router module so that server.js file can use it
module.exports = router;