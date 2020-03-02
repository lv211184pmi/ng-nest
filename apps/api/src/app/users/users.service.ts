
import { Injectable } from '@nestjs/common'

export type User = any

@Injectable()
export class UsersService {
    private readonly users: User[]

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'testUser1',
                password: 'testPsw1',
            },
            {
                userId: 2,
                username: 'testUser2',
                password: 'testPsw2',
            },
            {
                userId: 3,
                username: 'testUser3',
                password: 'testPsw3',
            },
        ]
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}
