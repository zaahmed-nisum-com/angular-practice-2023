import { ADDRESS_REGEX } from "../../constants"

export const isValidAddress = (address) => {
    if (address == '') {
        return 'Please enter address'
    } else {
        if (!ADDRESS_REGEX(address)) {
            return 'Invalid address'
        }
    }
}