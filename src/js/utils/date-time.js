import moment from 'moment';
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export function formatDateTime(rawDate) {
    let momentDate = moment(rawDate);
    let date = MONTH[momentDate.month()]+' '+momentDate.date()+", "+momentDate.year();
    let time = " "+momentDate.hour()+":"+momentDate.minutes();

    return momentDate.format("MMM DD YYYY, h:mm a");;
}

