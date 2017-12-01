import Settings from './../settings/settings';

class connectorProvider {

    static sendRequest(requestName, requestMethod, requestParams, useLoader, loaderMessage) {
        let apiFullUrl = Settings.API_URL + ':' + Settings.API_PORT + '/' + Settings.API_SUB_URL + '/' + requestName;
        return fetch(
            apiFullUrl,
            {
                method: requestMethod,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: (requestMethod !== 'GET') ? requestParams : null
            }
        ).then(res => {
            if (res.status !== 200) {
                Promise.reject(res);
            }
            return res.json();
        }).then(data => {
            return Promise.resolve(data);
        }).catch(e => {
            console.error(e);
            return Promise.reject(e);
        })
    }
}

export default connectorProvider;