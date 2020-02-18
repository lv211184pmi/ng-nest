import { Validators } from "@angular/forms";
import { FieldConfig } from '../../shared/interfaces/dynamic-form.interface';

export class RegistrationForm {
    public static registrationConfig: FieldConfig[] = [
        {
            type: "input",
            label: "Username",
            inputType: "text",
            name: "name",
            validations: [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Name Required"
                },
                {
                    name: "pattern",
                    validator: Validators.pattern("^[a-zA-Z]+$"),
                    message: "Accept only text"
                }
            ]
        },
        {
            type: "input",
            label: "Email Address",
            inputType: "email",
            name: "email",
            validations: [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Email Required"
                },
                {
                    name: "pattern",
                    validator: Validators.pattern(
                        "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                    ),
                    message: "Invalid email"
                }
            ]
        },
        {
            type: "input",
            label: "Password",
            inputType: "password",
            name: "password",
            validations: [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Password Required"
                }
            ]
        },
        {
            type: "radiobutton",
            label: "Gender",
            name: "gender",
            options: ["Male", "Female"],
            value: "Male"
        },
        {
            type: "checkbox",
            label: "Accept Terms",
            name: "term",
            value: true
        },
        {
            type: "button",
            label: "Save"
        }
    ];
}