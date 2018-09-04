import moment from 'moment';
export function formatDateTime(rawDate) {
    return moment(rawDate).format("DD MMM, h:mm a");
}

