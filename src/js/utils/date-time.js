import moment from 'moment';
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export function formatDateTime(rawDate) {
    return moment(rawDate).format("MMM DD YYYY, h:mm a");;
}

