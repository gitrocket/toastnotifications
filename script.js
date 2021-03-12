const button = document.getElementById('button');
const toast = document.querySelector('.toast-container');

const messages = [
    "message 1",
    "message 2",
    "message 3",
    "message 4"
]

button.addEventListener('click', () => createNotification());

function createNotification() {
    //create element
    const notif = document.createElement('div');
    // give element a class
    notif.classList.add('toast');
    // attach random message to inner text
    notif.innerText = getRandomMessage();
    // append notification to child of the toast container
    toast.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}