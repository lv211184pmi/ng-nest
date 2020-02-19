import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'

import { LiveChatModule } from './live-chat.module'

async function bootstrapChat() {
    const app = await NestFactory.create<NestExpressApplication>(LiveChatModule)
    app.useStaticAssets(join(__dirname, '..', 'static'))
    await app.listen(3000)
}

bootstrapChat()
