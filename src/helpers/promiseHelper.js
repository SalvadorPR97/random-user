import { Person } from "../classes/Person"

export function parsePerson(person) {
    return new Promise((resolve, reject) => {
        if (person !== null || person !== undefined) {
            const objectPerson = new Person(person.name.first, person.name.last);
            objectPerson.email = person.email;
            objectPerson.phone = person.phone;
            objectPerson.picture = person.picture.large;
            objectPerson.city = person.location.city;
            resolve(objectPerson);
        } else {
            let error = new Error("El objeto es null o undefined");
            error.name = "parserToClass";
            reject(error);
        }
    })
}