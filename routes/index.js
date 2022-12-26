const express = require("express");

// Import our modular routers for /tips and /feedback
const notes = require("./notes.html");
// TODO: import your diagnostics route

const app = express();

app.use("/", notes);
// TODO: Initialize diagnostics route

module.exports = app;

// Backend routes will be of 2 types
// 1. HTML Routes (Whenever a user makes request it provides the HTML files in response)
// 2. API routes (Actual Backend routes which communicate with the database to get the data)
