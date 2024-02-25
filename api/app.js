const express = require('express')
const cors = require('cors')
const port = 4000
const app = express()

const connectDb  = require ('./config/db.js')


const OTEL_SERVICE_NAME='inventory-api'
const OTEL_RESOURCE_ATTRIBUTES='deployment.environment=dev, service.version=1.0.1'
const OTEL_EXPORTER_OTLP_ENDPOINT='http://localhost:4317'
const OTEL_LOG_LEVEL='debug'

const inventory = require('./routes/inventory');

connectDb()
app.use(cors())
app.use('/inventory', inventory);



app.listen(port, () => {
  console.log(`Server running at http://${port}/`);
})