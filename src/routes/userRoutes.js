const express = require('express');
const router = express.Router();
const { getUsers, saveUsers, upDateUser, deleteUser } = require('../controllers/userController');


//logic routes
router.get('/users', getUsers);
router.post('/', saveUsers);
router.put('/:id', upDateUser);
router.delete('/:id', deleteUser);

module.exports = router;
