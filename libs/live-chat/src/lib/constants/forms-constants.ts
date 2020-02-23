import { Validators } from '@angular/forms'
import { FieldConfig } from '../interfaces/dynamic-form.interface'

export const LiveChatFormConfig: FieldConfig[] = [
    {
        type: 'textarea',
        label: 'enter your message',
        name: 'chatMessage',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Your message can\'t be empty'
            }
        ]
    },
    {
        type: 'button',
        label: 'Send message'
    }
]