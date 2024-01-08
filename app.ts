import axios from 'axios';
import express from 'express';
import weatherRouter from './api/weatherApi';

const app = express();

app.use(express.json()); // auto parsing request data to json
app.use(express.urlencoded({ extended: true })); // auto parsing url encoded form data

app.get('/', (req, res) => {
  res.send('Hello World from Express Server');
});

app.use('/weather', weatherRouter);


app.listen(5000, () => {
  console.log('Server running on port 5000');
});