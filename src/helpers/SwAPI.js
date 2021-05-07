const BASEAPI = 'https://swapi.dev/api';

const apiFetchPost = async (endpoint, body) => {
    const res = await fetch(BASEAPI + endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const json = await res.json();

    return json;
}

const apiFetchGet = async (endpoint) => {
    const response = await fetch(BASEAPI + endpoint);

    const data = await response.json();

    return data;
}

const SwAPI = {

    getFilm: async (id = 1) => {
        const json = await apiFetchGet('/films/' + id);
        return json;
    },

    getFilms: async () => {
        const json = await apiFetchGet('/films');
        return json.results;
    },

    getCharacters: async (page = 1) => {
        const json = await apiFetchGet('/people/?page=' + page);
        return json;
    },

    getPeople: async (id = 1) => {
        const json = await apiFetchGet('/people/' + id);
        return json;
    },

    getAllPeople: async () => {
        let json = await apiFetchGet('/people/');
        let pages = Math.ceil(parseInt(json.count) / 10);
        json = json.results;

        if (pages > 1) {
            for (let i = 2; i <= pages; i++) {
                let json2 = await apiFetchGet('/people/?page=' + i);
                json = json.concat(json2.results);
            }
        }
        return json;
    },

    getSpecies: async (page = 1) => {
        const json = await apiFetchGet('/species/?page=' + page);
        return json;
    },

    getSpecie: async (id = 1) => {
        const json = await apiFetchGet('/species/' + id);
        return json;
    },

    getAllSpecies: async () => {
        let json = await apiFetchGet('/species/');
        let pages = Math.ceil(parseInt(json.count) / 10);
        json = json.results;

        if (pages > 1) {
            for (let i = 2; i <= pages; i++) {
                let json2 = await apiFetchGet('/species/?page=' + i);
                json = json.concat(json2.results);
            }
        }
        return json;
    },

    getVehicles: async (page = 1) => {
        const json = await apiFetchGet('/vehicles/?page=' + page);
        return json;
    },

    getVehicle: async (id = 1) => {
        const json = await apiFetchGet('/vehicles/' + id);
        return json;
    },

    getAllVehicles: async () => {
        let json = await apiFetchGet('/vehicles/');
        let pages = Math.ceil(parseInt(json.count) / 10);
        json = json.results;

        if (pages > 1) {
            for (let i = 2; i <= pages; i++) {
                let json2 = await apiFetchGet('/vehicles/?page=' + i);
                json = json.concat(json2.results);
            }
        }
        return json;
    },

    getStarships: async (page = 1) => {
        const json = await apiFetchGet('/starships/?page=' + page);
        return json;
    },

    getStarship: async (id = 1) => {
        const json = await apiFetchGet('/starships/' + id);
        return json;
    },

    getAllStarships: async () => {
        let json = await apiFetchGet('/starships/');
        let pages = Math.ceil(parseInt(json.count) / 10);
        json = json.results;

        if (pages > 1) {
            for (let i = 2; i <= pages; i++) {
                let json2 = await apiFetchGet('/starships/?page=' + i);
                json = json.concat(json2.results);
            }
        }
        return json;
    },

    getPlanets: async (page = 1) => {
        const json = await apiFetchGet('/planets/?page=' + page);
        return json;
    },

    getPlanet: async (id = 1) => {
        const json = await apiFetchGet('/planets/' + id);
        return json;
    },

    getAllPlanets: async () => {
        let json = await apiFetchGet('/planets/');
        let pages = Math.ceil(parseInt(json.count) / 10);
        json = json.results;

        if (pages > 1) {
            for (let i = 2; i <= pages; i++) {
                let json2 = await apiFetchGet('/planets/?page=' + i);
                json = json.concat(json2.results);
            }
        }
        return json;
    }

};

export default () => SwAPI;