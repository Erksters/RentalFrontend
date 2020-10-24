const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
    host     : 'localhost', // Your connection adress (localhost).
    user     : 'Erksters',     // Your database's username.
    password : 'Ilydork123.',        // Your database's password.
    database : 'properties'   // Your database's name.
  });

  // Starting our app.
const app = express();

// Creating a GET route that returns data from the 'tenants' table.
app.get('/tenants', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'tenants' table).
    connection.query('SELECT * FROM Tenants', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(4000, () => {
 console.log('Go to http://localhost:4000/tenants so you can see the data.');
});
