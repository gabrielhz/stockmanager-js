require("dotenv").config();
const express = require('express');
const app = express();
const port = 3030;

module.exports = { app, port, express };