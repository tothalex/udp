import { createServer } from 'net'

const createTCPServer = () => {
  const server = createServer()

  server.on('connection', connection => {
    connection.write('ok')
  })

  return server
}

export { createTCPServer }
