// Import the dependencies
// NPM Init -y 
// Body parser will enable us to send post requests
// cors enables cross origin request
// express as a framework to create the routing of our application
// mongoose to create modals for our posts
// nodemon so we dont have to manually reset the server
// we can import express by going into package json and add "type" : "module", after the main tag
// we add on scripts start: nodemon index.js so that we only run npm start

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())