const events = (e) => {
    const btns = document.querySelectorAll('.icons');
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const label = e.dataset.label;
    const value = e.dataset.value;
    subtitle.textContent = `${label}: `;
    title.textContent = value;
    btns.forEach((btn) => {
        btn.classList.contains('active') ? btn.classList.remove('active') : '';
    })
    e.classList.add('active');
};

export default events;