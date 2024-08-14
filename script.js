document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            processMessage(message);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendButton.click();
        }
    });

    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', `${sender}-message`);
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function processMessage(message) {
        let response = '';

        if (message.includes('qué es la mitosis')) {
            response = 'La mitosis es el proceso mediante el cual una célula se divide para formar dos células hijas genéticamente idénticas.';
        } else if (message.includes('etapas de la mitosis')) {
            response = 'Las principales etapas de la mitosis son: profase, metafase, anafase y telofase.';
        } else if (message.includes('cuál es la función de la mitosis')) {
            response = 'La función principal de la mitosis es el crecimiento, la reparación de tejidos y la reproducción asexual en organismos unicelulares.';
        } else if (message.includes('diferencia entre mitosis y meiosis')) {
            response = 'La mitosis produce dos células hijas idénticas a la célula madre, mientras que la meiosis produce cuatro células hijas con la mitad del número de cromosomas de la célula madre.';
        } else {
            response = 'Lo siento, no entiendo tu pregunta. ¿Puedes hacer otra sobre la mitosis?';
        }

        addMessage(response, 'bot');
    }
});


