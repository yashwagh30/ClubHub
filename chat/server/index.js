const express = require('express');
const path = require('path');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello, World');
});

app.use('/auth', authRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.use(express.static(path.join(__dirname, 'client')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
