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
    // bg: 'http://192.168.1.149:8087/internal/api/v1/bg' // Shuvo
    bg: 'http://10.10.10.11:8087/internal/api/v1/bg' // DEV
    // bg: 'http://10.200.40.206:8087/internal/api/v1/bg' // LIVE
};