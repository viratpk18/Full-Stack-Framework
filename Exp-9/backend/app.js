const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const quizRoutes = require("./routes/quiz");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/quiz", quizRoutes);
app.use("/questions", quizRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
