// chat.js

// Get references to the DOM elements
const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Function to add a message to the chat
function addMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(`You: ${message}`);
        messageInput.value = ''; // Clear the input
    }
});

// Optional: Allow sending messages with the Enter key
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});