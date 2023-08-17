const express = require("express");
const path = require("path");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth.js");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets (React build files) if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/src")));

  // Serve React app's HTML file for the root URL
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/src/Home.js"));
  });
}


// // Example route
// app.get("/api/Home", (req, res) => {
//   res.json({ message: "This is an example route." });
// });

// Start server
db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}/`)
  );
});
