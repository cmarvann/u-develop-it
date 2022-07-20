// import server 
const express = require('express');

// add port
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// get route
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });
  
// start server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });

    // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
    