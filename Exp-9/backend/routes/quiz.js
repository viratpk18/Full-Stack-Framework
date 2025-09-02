const express = require("express");
const fs = require("fs");
const router = express.Router();

// Fetch questions
router.get("/:topic", (req, res) => {
  const topic = req.params.topic;
  try {
    const data = fs.readFileSync(`./questions/${topic}.json`);
    const questions = JSON.parse(data);
    res.json(questions);
  } catch (err) {
    res.status(404).json({ error: "Topic not found" });
  }
});

// Evaluate score
router.post("/submit/:topic", (req, res) => {
  const topic = req.params.topic;
  const userAnswers = req.body.answers;

  try {
    const data = fs.readFileSync(`./questions/${topic}.json`);
    const questions = JSON.parse(data);

    let score = 0;
    userAnswers.forEach((ans, index) => {
      if (questions[index].answer === ans) score++;
    });

    res.json({ score, total: questions.length });
  } catch (err) {
    res.status(500).json({ error: "Error evaluating quiz" });
  }
});

module.exports = router;
