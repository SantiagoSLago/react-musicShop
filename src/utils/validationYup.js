import { object, string, number } from "yup";






let userSchema = object({
    name: string().required(),
    phone: number().required().positive().integer(),
    email: string().email().required()
})

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return {
            status: "Success"
        }
    } catch (error) {
        return {
            status: "Error",
            error: error.message
        }
    }
}

export default validateForm
