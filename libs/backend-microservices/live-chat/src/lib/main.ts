import { NestFactory } from '@nestjs/core'
import { Transport } from '@nestjs/microservices'

import { LiveChatModule } from './live-chat.module'

async function bootstrapChat() {
    const app = await NestFactory.createMicroservice(LiveChatModule, {
        transport: Transport.TCP,
    })
    await app.listen(() => console.log('Live chat microservice is listening!'))
}

bootstrapChat()
