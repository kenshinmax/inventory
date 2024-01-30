const express = require('express')
const cors = require('cors')

const app = express()

const OTEL_SERVICE_NAME='inventory-api'
const OTEL_RESOURCE_ATTRIBUTES='deployment.environment=dev, service.version=1.0.1'
const OTEL_EXPORTER_OTLP_ENDPOINT='http://localhost:4317'
const OTEL_LOG_LEVEL='debug'

app.use(cors())

app.get('/', (req, res) => {
  return res.send('Hello World')
})

app.use('/', require('./routes/inventory'));

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})