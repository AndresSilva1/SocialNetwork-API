const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../../controllers/thoughtsController.js');

// /api/courses
router.route('/').get(getThoughts).post(createCourse);

// /api/courses/:courseId
router
  .route('/:id')
  .get(getSingleThought)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
