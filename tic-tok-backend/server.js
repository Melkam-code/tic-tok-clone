import express from 'express'
import mongoose from 'mongoose'
import data from './data.js'

//configure app
const app = express();

//define port for app to run
const port = 9000;

//middleware

//db config
const connection_url = "mongodb+srv://melkam:melkam@cluster1.b8cq6c6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
})

//api endpoints
//health check api
app.get('/', (req, res) => res.status(200).send('Hello world!'));

//test api to see local data showup on endpoint
app.get('/v1/posts', (req, res) => res.status(200).send(data));

//make app listen to port
app.listen(port, () => console.log(`Listening on localhost: ${port}`));

