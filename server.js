const express = require('express');
const fs = require('fs'); // Import the file system module
const app = express();
const port = 3000;

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain).use(express.json());

app.get('/images', (req, res) => {
  // Read data from the JSON file and send it as a response
  fs.readFile('data.json', 'utf8', (err, fileData) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    const data = JSON.parse(fileData || '{}');
    res.status(200).json(data);
  });
});

app.post('/images', (req, res) => {
  const data = req.body;

  // Store the data in a JSON file
  fs.readFile('data.json', 'utf8', (err, fileData) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    const existingData = JSON.parse(fileData || '{}');
    const existingItems = existingData.items || [];

    existingItems.push(data);
    existingData.items = existingItems;

    fs.writeFile('data.json', JSON.stringify(existingData ), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).send('Error writing to file');
      }
      console.log('Data written to file:', existingData);
      res.status(200).send('Data received and stored successfully');
    });
  });
});

app.delete('/images/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  fs.readFile('data.json', 'utf8', (err, fileData) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    const jsonData = JSON.parse(fileData || '{}');
    const existingItems = jsonData.items || [];
    const updatedItems = existingItems.filter(item => item.id !== itemId);

    if (existingItems.length === updatedItems.length) {
      return res.status(404).send('Item not found');
    }

    jsonData.items = updatedItems;

    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).send('Error writing to file');
      }
      console.log(`Item with ID ${itemId} removed`);
      res.status(200).send(`Item with ID ${itemId} removed`);
    });
  });
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
