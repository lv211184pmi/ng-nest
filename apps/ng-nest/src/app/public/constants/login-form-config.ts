import { Validators } from '@angular/forms'
import { FieldConfig } from '../../shared/interfaces/dynamic-form.interface'

export const LoginFormConfig: FieldConfig[] = [
    {
        type: 'input',
        label: 'Username',
        inputType: 'text',
        name: 'name',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Name Required'
            },
            {
                name: 'pattern',
                validator: Validators.pattern('^[a-zA-Z]+$'),
                message: 'Accept only text'
            }
        ]
    },
    {
        type: 'input',
        label: 'Password',
        inputType: 'password',
        name: 'password',
        validations: [
            {
                name: 'required',
                validator: Validators.required,
                message: 'Password Required'
            }
        ]
    },
    {
        type: 'button',
        label: 'Save'
    }
]
