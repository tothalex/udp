import * as express from 'express'
import { json } from 'body-parser'

import { createUdpServer } from './udp'
import { createTCPServer } from './tcp'

createUdpServer(80)
const tcpServer = createTCPServer()
const httpServer = express()

httpServer.use(json())

httpServer.get('/healthz', (_, res) => {
  res.send('ok')
})

httpServer.listen(9000, () => {
  console.log('http server listening on :9000')
  tcpServer.listen(90)
})
