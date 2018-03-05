const headers = {'content-type': 'application/json', 'Accept': 'application/json'};
const mm = 'https://jsonplaceholder.typicode.com';

const routes = {
    get_posts: `${mm}/posts`,
    get_comments: `${mm}/comments`
};

const Http = {
    GET: (key) => {
        return fetch(routes[key], {
            method: 'GET',
            headers
        })
        .then(response => response.json());
    },
    POST: (key, data) => {
        return fetch(routes[key], {
            method: 'POST',
            body: data,
            headers
        })
        .then(response => response.json());
    }
};

export default Http;