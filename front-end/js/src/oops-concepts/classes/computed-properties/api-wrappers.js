class ReqResApiClient {
    constructor(baseURL, endpoints) {
        this.baseURL = baseURL;

        endpoints.forEach((endpoint) => {
            this[endpoint] = async function (data) {
                const response = await fetch(`${this.baseURL}/${endpoint}`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                });
                return await response.json();
            }
        });
    }
}

let api = new ReqResApiClient('https://reqres.in/api', ['register', 'login']);

// Use the dynamically generated methods
api.login({ email: 'eve.holt@reqres.in', password: 'cityslicka' })
    .then(response => console.log(response))
    .catch(error => console.error('Error:', error));

// In this example, we're creating an instance of ReqResApiClient that can hit two endpoints (register, login) of the reqres.in API. The login and register methods are created dynamically using computed properties, and they each send a POST request to their respective endpoint.