const showPerson = (person) => {
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const btns = document.querySelectorAll('.icons');
    const img = document.querySelector('.img');
    img.setAttribute('src', person.image);
    btns.forEach((btn) => {
        const label = btn.dataset.label;
        label == "name" ? btn.dataset.value = person.fullName : '';
        label == "email" ? btn.dataset.value = person.email : '';
        label == "age" ? btn.dataset.value = `${person.age} years` : '';
        label == "adress" ? btn.dataset.value = person.adress : '';
        label == "phoneNumber" ? btn.dataset.value = person.phone : '';
        label == "password" ? btn.dataset.value = person.password : '';
        if (btn.classList.contains('active')) {
            subtitle.textContent = `${label}: `;
            title.textContent = btn.dataset.value;
        }
    });
};

export default showPerson;