const mysql = require('mysql');
const express = require('express');

const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((error) => {
  if (error) {
    console.error('Failed to connect to database:', error);
  } else {
    console.log('Connected to database.');
  }
});

app.get('/', (req, res) => {
  res.send('サーバーが起動しました');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
