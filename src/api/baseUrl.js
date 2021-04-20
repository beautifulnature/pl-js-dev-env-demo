/* export default function getBaseUrl() {
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3001/' : '/';
} */

/* eslint-disable no-console */

export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://young-anchorage-99413.herokuapp.com/';
}

/* method using vanilla regex */
/* function getQueryStringParameterByName(name, url) {
    if(!url) url = window.location.href;
    name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
} */

function getQueryStringParameterByName(name) {
    const params = (new URL(location)).searchParams;
    return params.get(name);
}