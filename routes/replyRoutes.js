const express = require('express');
const {
  getReplys,
  addReply,
  getReply,
  editReply,
  removeReply,
  getReplysByCourseID
} = require('../controllers/replyController');

const router = express.Router();

router.get('/reply', getReplys);        // GET semua reply
router.post('/reply', addReply);       // POST reply baru
router.get('/reply/:id', getReply);  
router.get('/replyByCourseID/:CourseID', getReplysByCourseID);  // GET reply berdasarkan ID
router.put('/reply/:id', editReply);   // PUT untuk update reply
router.delete('/reply/:id', removeReply); // DELETE reply

module.exports = router;
