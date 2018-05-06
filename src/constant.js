const APPLICATION_ID = 7;

const actionMap = {
    EXECUTE: 'Matched',
    SKIP: 'Skipped'
};

const statusMap = {
    102: {
        name: 'IN PROGRESS',
        icon: 'time',
        color: 'warning'
    },
    200: {
        name: 'DONE',
        icon: 'ok-circle',
        color: 'success'
    }
};

const categoryContainer = [
    {value: 'SUCCESSFUL', style: 'success'},
    {value: 'REVERTED', style: 'info'},
    {value: 'FAILED', style: 'danger'}
];

const API = {
    typicode: 'https://jsonplaceholder.typicode.com',
    bizz: 'http://10.10.10.10:8084/api', // DEV,
    // bizz: 'http://10.15.40.10:8084/api',
    central_auth: 'http://10.10.10.199:8000'
    // central_auth: 'http://10.10.40.31:8000'

};

export {APPLICATION_ID, actionMap, statusMap, categoryContainer, API};