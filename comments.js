// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'Mike', comment: 'hahahah' },
  { username: 'Tammy', comment: 'roflcopter' },
  { username: 'Mike', comment: 'lmao' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});