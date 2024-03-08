const express = require("express");
const router = express.Router();

//Routes
router.get('/', (req, res) => {
  res.sendFile('index')
});

router.get('/about', (req, res) => {
  res.sendFile('../public/about')
});

//res.sendFile(path.join(__dirname, 'public/index.html'));



module.exports = router;