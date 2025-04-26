const express = require('express');
const {
  getComments,
  addComment,
  getComment,
  editComment,
  removeComment,
  getCommentsByCourseID
} = require('../controllers/commentController');

const router = express.Router();

router.get('/comments', getComments);        // GET semua comment
router.post('/comments', addComment);       // POST comment baru
router.get('/comments/:id', getComment);  
router.get('/commentsByCourseID/:CourseID', getCommentsByCourseID);  // GET comment berdasarkan ID
router.put('/comments/:id', editComment);   // PUT untuk update comment
router.delete('/comments/:id', removeComment); // DELETE comment

module.exports = router;
