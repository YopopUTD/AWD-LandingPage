const button = document.getElementById('_button');
const notification = document.getElementById('_notification');

button.addEventListener('click', () =>{
    const counter = Number(notification.getAttribute('data-count'))

    notification.setAttribute('data-count', counter +1);
    notification.classList.add('count');
    notification.classList.add('notify');
    button. classList.toggle('active');
})

notification.addEventListener('animationed', () =>{
    notification.classList.remove('notify');
    button.classList.remove('active');
})