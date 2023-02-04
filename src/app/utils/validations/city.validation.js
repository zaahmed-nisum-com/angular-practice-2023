import { CITY_REGEX } from "../../constants"

export const isValidCity = (city) => {
    if (city == '') {
        return 'Please city name'
    } else {
        if (!CITY_REGEX(city)) {
            return 'Invalid city'
        }
    }
}