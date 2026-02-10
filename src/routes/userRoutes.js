const express = require('express');
const router = express.Router();
const { getUsers, saveUsers, upDateUser, deleteUser } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', saveUsers);
router.put('/:id', upDateUser);
router.delete('/:id', deleteUser);

module.exports = router;
