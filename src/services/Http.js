import axios from 'axios';

import { API } from '../constant';

const {bizz, typicode} = API;

const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
const routes = {
    get_posts: `${typicode}/posts`,
    get_comments: `${typicode}/comments`,
    targetGroups: `${bizz}/target-groups`,
    getCriteria: `${bizz}/target-groups/criteria`,
    notifyPush: `${bizz}/notify/push`,
    notifySms: `${bizz}/notify/sms`,
    
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

const Http = {
    GET: (key, params = '') => {
        params = typeof params === 'object' ? encodeQueryData(params) : params;
        return axios.get(routes[key] + params, {headers});
    },
    POST: (key, params) => {
        return axios.post(routes[key], params, headers);
    },
    PUT: (key, params) => {
        return axios.put(routes[key], params, headers);
    },
    UPLOAD: (key, {name, file}) => {
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
