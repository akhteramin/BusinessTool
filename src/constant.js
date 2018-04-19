export const actionMap = {
    EXECUTE: 'Matched',
    SKIP: 'Skipped'
};

export const statusMap = {
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

export const categoryContainer = [
    {value: 'SUCCESSFUL', style: 'success'},
    {value: 'REVERTED', style: 'info'},
    {value: 'FAILED', style: 'danger'}
];

export const API = {
    typicode: 'https://jsonplaceholder.typicode.com',
    bizz: 'http://10.10.10.10:8084/api' // DEV
};