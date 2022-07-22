const mysql = require('mysql2');

// Connect to database catchall route
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'campbc',
      database: 'election'
    }
  );
  
  module.exports = db;
