// server.js

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Hello from your Vercel server!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
