const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const models = require('./models');

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/myapp';



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);


mongoose.connect(MONGODB_URI)
mongoose.Promise = global.Promise;
let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// mongoose.connect( MONGODB_URI);




app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});