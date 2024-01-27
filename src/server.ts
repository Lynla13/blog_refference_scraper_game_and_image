import express from "express";
import * as bodyParser from "body-parser"
import * as http from "http"
import * as dotenv from "dotenv";

dotenv.config

const app = express()
const port = process.env.PORT || 3000

// let routes = require('./router/router') //importing route
// routes(app)

app.post("/", (req, res) => {
    res.send("Express + TypeScript Server")
  })

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})