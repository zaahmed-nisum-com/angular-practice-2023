import { COUNTRY_REGEX } from "../../constants"

export const isValidCountry = (country) => {
    if (country == '') {
        return 'Please enter name'
    } else {
        if (!COUNTRY_REGEX(country)) {
            return 'Invalid name'
        }
    }
}