const {
  getAllComments,
  createComment,
  getCommentById,
  updateComment,
  deleteComment,
  getCommentByIdCourse
} = require('../models/commentModel');

// Mendapatkan semua comment
const getComments = async (req, res) => {
  try {
    const comments = await getAllComments(); // Menggunakan async/await
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching comments', details: err.message });
  }
};

const getCommentsByCourseID = async (req, res) => {
  const CourseID = req.params.CourseID;
  try {
    const comments = await getCommentByIdCourse(CourseID); // Menggunakan async/await
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching comments by Course ID', details: err.message });
  }
};

// Menambahkan comment baru
const addComment = async (req, res) => {
  const data = req.body;
  try {
    const result = await createComment(data);
    res.json({ message: 'Comment created', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Error creating comment', details: err.message });
  }
};

// Mendapatkan comment berdasarkan ID
const getComment = async (req, res) => {
  const id = req.params.id;
  try {
    const comment = await getCommentById(id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching comment', details: err.message });
  }
};

// Mengupdate comment
const editComment = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    await updateComment(id, data);
    res.json({ message: 'Comment updated' });
  } catch (err) {
    res.status(500).json({ error: 'Error updating comment', details: err.message });
  }
};

// Menghapus comment
const removeComment = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteComment(id);
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting comment', details: err.message });
  }
};

module.exports = { getComments, addComment, getComment, editComment, removeComment, getCommentsByCourseID };
