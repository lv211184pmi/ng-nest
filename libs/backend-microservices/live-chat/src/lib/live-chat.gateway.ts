// import {
//     SubscribeMessage,
//     WebSocketGateway,
//     OnGatewayInit,
//     WebSocketServer,
//     OnGatewayConnection,
//     OnGatewayDisconnect
// } from '@nestjs/websockets'
// import { Logger } from '@nestjs/common'
// import { Socket, Server } from 'Socket.io'

// @WebSocketGateway()
// export class LiveChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
//     @WebSocketServer() server: Server
//     private logger: Logger = new Logger('LiveChatGateway')

//     @SubscribeMessage('msgToServer')
//     handleMessage(client: Socket, payload: string): void {
//         this.server.emit('msgToClient', payload)
//     }

//     afterInit(server: Server) {
//         this.logger.log('Init')
//     }

//     handleDisconnect(client: Server) {
//         this.logger.log(`Client disconnected: ${client.id}`)
//     }

//     handleConnection(client: Socket, ...args: any[]) {
//         this.logger.log(`Client connected: ${client.id}`)
//     }
// }