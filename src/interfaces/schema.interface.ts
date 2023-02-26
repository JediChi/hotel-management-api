import { AsyncValidationOptions } from "joi"

interface ICreateSchema {
    name: string,
    email: string,
    password: string,
    roomType: string,
    price: number,
    secret: string
    // validateAsync: AsyncValidationOptions()
}

export default ICreateSchema