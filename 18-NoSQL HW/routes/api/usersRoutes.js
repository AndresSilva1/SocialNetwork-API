const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  // updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:UserId
router.route('/:userId').get(getSingleUser).delete(deleteUser); //Add Update

// router.route('/:userId').get(getSingleUser).update(updateUser); 

// /api/students/:studentId/assignments
// router.route('/:usertId/friends')

//I'm not sure what I should replace assignments with

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
// fetch("https://google.com/procudts/3asdf2342342?local=us&")
