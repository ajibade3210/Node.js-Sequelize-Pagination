const express = require("express");
const app = express();
const db = require("./models");
const Post = db.Post;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sync database
db.sequelize
  .sync()
  .then(() => {
    console.log("Database Synced.");
  })
  .catch(err => {
    console.log("Failed to sync db:  " + err.message);
  });

// Server Listening On PORT: 3000
app.listen(4000, (req, res) => {
  console.log("Server Started");
});
