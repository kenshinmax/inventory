const express = require('express')
const cors = require('cors')

const app = express()

const OTEL_SERVICE_NAME='inventory'
const OTEL_RESOURCE_ATTRIBUTES='deployment.environment=dev, service.version=1.0.1'
const OTEL_EXPORTER_OTLP_ENDPOINT='http://localhost:4317'
const OTEL_LOG_LEVEL='debug'
app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: The Name of the Wind"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})