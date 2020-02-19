import { Module } from '@nestjs/common'

import { LiveChatGateway } from './live-chat.gateway'

@Module({
    imports: [],
    controllers: [],
    providers: [ LiveChatGateway ]
})

export class LiveChatModule{}
