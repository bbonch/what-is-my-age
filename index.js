import { differenceInCalendarDays } from 'date-fns'

export default function (birthDate) {
    return Math.floor(differenceInCalendarDays(new Date(), new Date(birthDate)) / 365);
}