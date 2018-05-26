import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
const app = express()
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

app.use(router);
app.use(routes);

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3001))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/uhired");

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}`)
})


