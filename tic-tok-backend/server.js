import express from 'express'
import mongoose from 'mongoose'
import data from './data.js'
import tictokVideos from './dbModel.js'

//configure app
const app = express();

//define port for app to run
const port = 9000;

//middleware - use express's json functionality before testing post api with mongodb
app.use(express.json());
//other middlewares
/* app.use((req, res, next) => {
   res.setHeaders('Access-Control-Allow-Origin', '*'),
   res.setHeaders('Access-Control-Allow-Headers', '*'),
   next()
}) */

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

//api to mongodb
app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;
    tictokVideos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})
//api to get all videos
app.get('/v2/posts', (req, res) => {
    tictokVideos.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//make app listen to port
app.listen(process.env.PORT || port, () => console.log(`Listening on localhost: ${port}`));

