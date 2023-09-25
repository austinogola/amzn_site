const express = require('express')
const app = express()
const path = require('path')
const PORT=process.env.PORT || 3005;

app.use(express.static(path.join(__dirname, ''))); // Serve static files

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Serve the index.html file
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});