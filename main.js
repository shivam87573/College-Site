let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthitems = items.length - 1;

next.onclick = function() {
    if (active + 1 > lengthitems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadslider();
}

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengthitems;
    } else {
        active = active - 1;
    }
    reloadslider();
}

let autoslide = setInterval(() => { next.click(); }, 3000);

function reloadslider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let lastactiveDot = document.querySelector('.slider .dots li.active');
    if (lastactiveDot) lastactiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadslider();
    })
})





const chatButton = document.getElementById("chat-button");
const chatContainer = document.getElementById("chatContainer");
const minimizeButton = document.getElementById("minimize-button");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("conversation-group");
const sendButton = document.getElementById("SentButton");

if (chatButton) {
    chatButton.addEventListener("click", function () {
        if (chatContainer) {
            chatContainer.classList.add("open");
            chatButton.classList.add("clicked");
        }
    });
}

if (minimizeButton) {
    minimizeButton.addEventListener("click", function () {
        if (chatContainer) {
            chatContainer.classList.remove("open");
            chatButton.classList.remove("clicked");
        }
    });
}

function createMessage(message, isUser = true) {
    const newMessage = document.createElement('div');
    newMessage.classList.add(isUser ? 'sentText' : 'botText');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
    return newMessage;
}

function chatbotResponse() {
    const messages = ["Hello!", "How can I assist you?", "Let me know if you have any further questions"];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    const botMessage = createMessage(message, false);
    botMessage.scrollIntoView();
}

chatInput.addEventListener("input", function (event) {
    if (event.target.value) {
        sendButton.classList.add("svgsent");
    } else {
        sendButton.classList.remove("svgsent");
    }
});

chatInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        const message = chatInput.value;
        chatInput.value = "";
        const userMessage = createMessage(message);
        userMessage.scrollIntoView();
        setTimeout(chatbotResponse, 1000);
        sendButton.classList.add("svgsent");
    }
});

if (sendButton) {
    sendButton.addEventListener("click", function () {
        const message = chatInput.value;
        chatInput.value = "";
        const userMessage = createMessage(message);
        userMessage.scrollIntoView();
        setTimeout(chatbotResponse, 1000);
        sendButton.classList.add("svgsent");
    });
}

