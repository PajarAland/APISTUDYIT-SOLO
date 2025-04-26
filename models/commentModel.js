const db = require('../config/db');

// Mendapatkan semua comment
const getAllComments = async () => {
  const sql = 'SELECT * FROM modul_comments';
  try {
    const [results] = await db.query(sql);
    return results;
  } catch (err) {
    throw err;
  }
};

// Menambahkan comment baru
const createComment = async (data) => {
  const sql = 'INSERT INTO modul_comments SET ?';
  try {
    const [result] = await db.query(sql, data);
    return result;
  } catch (err) {
    throw err;
  }
};

// Mendapatkan comment berdasarkan ID
const getCommentById = async (id) => {
  const sql = 'SELECT * FROM modul_comments WHERE id = ?';
  try {
    const [results] = await db.query(sql, [id]);
    return results[0]; // Mengembalikan hanya satu comment
  } catch (err) {
    throw err;
  }
};

const getCommentByIdCourse = async (CourseID) => {
  const sql = 'SELECT * FROM modul_comments WHERE CourseID = ?';
  try {
    const [results] = await db.query(sql, [CourseID]);
    return results[0]; // Mengembalikan hanya satu comment
  } catch (err) {
    throw err;
  }
};

// Mengupdate comment
const updateComment = async (id, data) => {
  const sql = 'UPDATE modul_comments SET ? WHERE id = ?';
  try {
    const [result] = await db.query(sql, [data, id]);
    return result;
  } catch (err) {
    throw err;
  }
};

// Menghapus comment
const deleteComment = async (id) => {
  const sql = 'DELETE FROM modul_comments WHERE id = ?';
  try {
    const [result] = await db.query(sql, [id]);
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllComments, createComment, getCommentById,getCommentByIdCourse, updateComment, deleteComment };
