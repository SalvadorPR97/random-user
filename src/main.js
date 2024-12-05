import './style.css'
import * as DOMhelper from './helpers/DOMHelper'
import * as api from './helpers/api'
import * as promiseHelper from './helpers/promiseHelper';

const body = document.querySelector("body");
const h1Title = document.createElement("h1");
h1Title.textContent = "Random User";
const divContainer = document.createElement("div");
divContainer.className = "container";
const divCard = document.createElement("div");
divCard.className = "card";
const imgProfile = document.createElement("img");
imgProfile.src = "/user_nt_found.jpg";
divCard.append(imgProfile);

const indexes = ["Name", "Mail", " Phone", "Location", "CUrrent Time"];
const mockData = [" name surname", " mail", " phone", " city", " time"];
const userCard = DOMhelper.createUserCard(indexes, mockData);
divCard.append(...userCard);

const button = document.createElement("button");
button.textContent = "GENERATE USER";

divContainer.append(divCard, button);
body.append(h1Title, divContainer);



button.addEventListener("click", async () => {
  const person = await api.getRandomPerson();
  let objectPerson = await promiseHelper.parsePerson(person);
  let datetime = "";
  try {
    const locationDatetime = api.urlDatetime + objectPerson.city;
    let worldtime = await fetch(locationDatetime, api.optionsDatetime)
      .then((response) => response.json());
    datetime = worldtime.datetime;
  } catch (error) {
    console.error(error);
  }
  divCard.innerHTML = "";
  const data = [`${objectPerson.firstName} ${objectPerson.lastName}`,
  objectPerson.email, objectPerson.phone, objectPerson.city, datetime];
  let newUser = DOMhelper.createUserCard(indexes, data);
  imgProfile.src = objectPerson.picture;
  divCard.append(imgProfile, ...newUser);
})