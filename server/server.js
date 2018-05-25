import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3001;
const router = express.Router();
const staticFiles = express.static(path.join(__dirname, '../../client/build'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(staticFiles);
app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}`)
})

process.env.MONGODB_URI || "mongodb://localhost/uhired");

process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });