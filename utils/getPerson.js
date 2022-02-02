import showPerson from "./showPerson.js";
import getData from "./getData.js";

const getPerson = (person) => {
    person = getData(person);
    showPerson(person);
};

export default getPerson;