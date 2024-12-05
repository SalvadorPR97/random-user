//Random user api
const urlRandom = "https://randomuser.me/api/";

export async function getRandomPerson() {
    try {
        let person = await fetch(urlRandom)
            .then((response) => response.json());
        const resultPerson = person.results[0];
        return resultPerson;
    } catch (error) {
        console.error(error);
    }

}

// WorldTime api
const urlDatetime = `https://world-time-by-based-api.p.rapidapi.com/v1/worldtime/?location=`;
const optionsDatetime = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9dc0905ab3msha0e56fdff01d91ap1a421ejsnd39ab0b456fb',
        'x-rapidapi-host': 'world-time-by-based-api.p.rapidapi.com'
    }
};
export async function getDatetimePerson(location) {
    try {
        const locationDatetime = urlDatetime + location;
    let worldtime = await fetch(locationDatetime, optionsDatetime)
        .then((response) => response.json());
    const datetime = worldtime.datetime;
    return datetime;
    } catch (error) {
        console.error(error);
    }
    
}