import { EMAIL_REGEX } from "../../constants"

export const isValidEmail = (email) => {
    if (email == '') {
        return 'Please enter name'
    } else {
        if (!EMAIL_REGEX(email)) {
            return 'Invalid name'
        }
    }
}