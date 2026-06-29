import express from "express";
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "this is home page",
  });
});
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
