import express from 'express'
import mongoose from 'mongoose'

//configure app
const app = express();

//define port for app to run
const port = 9000;

//health check api
app.get('/', (req, res) => res.status(200).send('Hello world!'));

//make app listen to port
app.listen(port, () => console.log(`Listening on localhost: ${port}`));

