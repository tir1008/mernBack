global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})
const express = require('express');
const app = express();
const port = 5000;

// Middleware for handling CORS requests from your front-end domain
app.use((req, res, next) => {
  // Replace 'http://localhost:3000' with the domain of your front-end application
  res.setHeader('Access-Control-Allow-Origin', 'https://mernfront-gmgo.onrender.com');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
