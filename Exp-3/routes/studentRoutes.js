const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create
router.post('/add', async (req, res) => {
  const { name, roll, email } = req.body;
  await Student.create({ name, roll, email });
  res.redirect('/');
});

// Read all
router.get('/all', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Update
// Update student (POST request from update form)
router.post('/update/:id', async (req, res) => {
  const { name, roll, email } = req.body;
  await Student.findByIdAndUpdate(req.params.id, { name, roll, email });
  res.redirect('/');
});
// Display update form
router.get('/edit/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(`
    <link rel="stylesheet" href="/style.css">
    <h2>Update Student</h2>
    <form action="/students/update/${student._id}" method="POST">
      <input type="text" name="name" value="${student.name}" required /><br>
      <input type="text" name="roll" value="${student.roll}" required /><br>
      <input type="email" name="email" value="${student.email}" required /><br>
      <button type="submit">Update</button>
    </form>
    <a href="/">Back to Home</a>
  `);
});

// Delete
router.get('/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
