import axios from 'axios';

import { API } from '../constant';

const {bizz, central_auth, typicode} = API;

const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
const routes = {
    get_posts: `${typicode}/posts`,
    get_comments: `${typicode}/comments`,
    targetGroups: `${bizz}/target-groups`,
    getCriteria: `${bizz}/target-groups/criteria`,
    notifyPush: `${bizz}/notification/push`,
    notifySms: `${bizz}/notification/sms`,
    login: `${central_auth}/auth/api/v1/login/`, // POST
    logout: `${central_auth}/auth/api/v1/logout/` // GET
    
};

const encodeQueryData = data => {
    let ret = [], temp;
    for (let i in data) {
        temp = data[i];
        if (temp !== '' && temp !== null) {
            ret.push(encodeURIComponent(i) + '=' + encodeURIComponent(temp));
        }
    }
    return ret.length ? '?' + ret.join('&') : '';
};

const updateTokenInHeader = () => {
    const token = {
        local: JSON.parse(localStorage.getItem('token')),
        header: axios.defaults.headers.common['token']
    };

    if (token.local && !token.header) {
        axios.defaults.headers.common['token'] = token.local;
    }
};

const Http = {
    GET: (key, params = '') => {
        updateTokenInHeader();
        params = typeof params === 'object' ? encodeQueryData(params) : params;
        return axios.get(routes[key] + params, {headers});
    },
    POST: (key, params) => {
        updateTokenInHeader();
        return axios.post(routes[key], params, headers);
    },
    PUT: (key, params) => {
        updateTokenInHeader();
        return axios.put(routes[key], params, headers);
    },
    UPLOAD: (key, {name, file}) => {
        updateTokenInHeader();
        const formData = new FormData();
        formData.append(name, file);

        return axios.post(routes[key], formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};

export default Http;
