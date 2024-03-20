const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const categoryRoutes = require('./routes/category').router;
const bookRoutes = require('./routes/book').router;
app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/categories', categoryRoutes);
app.use('/books', bookRoutes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
