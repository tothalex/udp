import { createSocket, RemoteInfo } from 'dgram'

const onMessage = (msg: Buffer, remoteInfo: RemoteInfo) => {
  console.log(
    `${new Date().toUTCString()} - ${remoteInfo.address}:${
      remoteInfo.port
    } - ${msg.toString()}`
  )
}

export const createUdpServer = (port: number) => {
  const socket = createSocket('udp4')
  socket.on('message', onMessage)
  socket.bind(port)
  socket.on('listening', () => {
    console.log(`udp server listening on :${port}`)
  })
}
