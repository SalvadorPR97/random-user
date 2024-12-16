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
export const urlDatetime = `https://world-time-by-based-api.p.rapidapi.com/v1/worldtime/?location=`;
export const optionsDatetime = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_WORLD_TIME_API_KEY,
        'x-rapidapi-host': 'world-time-by-based-api.p.rapidapi.com'
    }
};