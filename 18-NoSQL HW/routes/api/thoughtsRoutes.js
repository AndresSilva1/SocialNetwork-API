const router = require('express').Router();

const   {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
 } = require('../../controllers/thoughtsController.js');
// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/courses/:courseId
router
  .route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
// const myObj = {
//   name:"Dre",
//   iscoding: true,
//   codingSkills: {
//     javascript: true,
//     css: true
//   }
// }
// const {name, isHeCoding, codingSkills:{javascript,css}} = myObj
// console.log(javascript)
// const name = myObj.name
// const isCoding = myObj.iscoding

//
// let someVar ="hello"

// function myFunc(a,b){
  // let someVar = "Bye"
// return a + b
// }
// console.log(someVar)
// const myFunc = (a,b) => a + b
