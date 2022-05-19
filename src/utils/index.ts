export const fetcher = (url: string, queryParams: string = '') => {
    // Example fetch to demonstrate the logic
    console.log(queryParams);
    return fetch(url + queryParams).then(res => res.json());
};

export const serialize = (obj: any) => {
    let str = [];

    for (let p in obj) {
        if (obj[p] === 'difficulty' || obj[p] === 'taste' || obj[p] === 'media') {
            delete obj[p];
        }

        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p].toLowerCase()));
        }
    }

    return str.join('&');
};
