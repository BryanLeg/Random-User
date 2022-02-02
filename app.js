import getPerson from "./utils/getPerson.js";
import events from "./utils/events.js";

const btns = document.querySelectorAll('.icons');
const random = document.querySelector('.random');
const url = 'https://randomuser.me/api/';

const fetcher = () => {
    fetch(url)
        .then((data) => data.json())
        .then((response) => getPerson(response.results[0]))
}

window.addEventListener('DOMcontentLoaded', fetcher())

random.addEventListener('click', fetcher)

btns.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        events(btn);
    })
})