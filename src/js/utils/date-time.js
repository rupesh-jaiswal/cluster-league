import moment from 'moment';
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
export function formatDateTime(rawDate) {
    var momentDate = moment(rawDate);
    console.log(MONTH[momentDate.month()]);
}

