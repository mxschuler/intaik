const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatboxBody = document.getElementById('chatboxBody');








sendButton.addEventListener('click', async () => {
    const message = messageInput.value.trim();
    if (message) {
        // Display user message
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user');
        userMessageElement.textContent = message;
        chatboxBody.appendChild(userMessageElement);
        chatboxBody.scrollTop = chatboxBody.scrollHeight;

        // Clear input field
        messageInput.value = '';

        // Send message to server
        try {
            const response = await fetch("http://localhost:3000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });
            const data = await response.json();

            // Display AI response
            const aiMessageElement = document.createElement('div');
            aiMessageElement.classList.add('message');
            aiMessageElement.textContent = data.response;
            chatboxBody.appendChild(aiMessageElement);
            chatboxBody.scrollTop = chatboxBody.scrollHeight;
        } catch (error) {
            console.error("Error communicating with server:", error);
        }
    }
});


messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});







document.addEventListener('DOMContentLoaded', progress);
const progressBar = document.getElementById('progress-bar');
const progressButton = document.getElementById('progress-button');
var progress = 0;
var days = 0;
progressBar.style.height = '0%';

function progress(){
    progressButton.addEventListener('click', () => {
        if (progress < 100) {
            days += 1
            progress += 14.29;
            progressBar.style.height = progress + '%';
        }
        if (progress >= 100){
            progress = 0;
            days = 0;
            progressBar.style.height = '0%';
            window.open('sticker-book.html');
        }
    });
}