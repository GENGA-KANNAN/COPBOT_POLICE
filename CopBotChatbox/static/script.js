const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const relatedQuestions = document.getElementById('related-questions');

// Sample questions for suggestions
const allQuestions = [
    
    "How to file an FIR?",
    "What is the process for lost and found items?",
    "How to report a cybercrime?",
    "What documents are needed for passport verification?",
    "How to report a missing person?",
    "What should I do in case of a traffic accident?",
    "How to apply for a police clearance certificate?",
    "What is the procedure for filing a domestic violence complaint?",
    "How to report a theft?",
    "What is the process for obtaining a gun license?",
    "How to report harassment or stalking?",
    "What is the procedure for filing a noise complaint?",
    "How to report a fraud or scam?",
    "What is the process for obtaining a police escort?",
    "How to report a hit-and-run incident?",
    "What is the procedure for filing a complaint against a police officer?",
    "How to report a suspicious activity?",
    "What is the process for obtaining a copy of a police report?",
    "How to report a drug-related crime?",
    "What is the procedure for filing a complaint about loud neighbors?",

    "What are the operating hours of a police station?",
    "Can I visit a police station for non-emergency issues?",
    "What should I do if I need immediate police assistance?",
    "How can I locate the nearest police station?",
    "Can I file a complaint online instead of visiting a police station?",
    "How to verify if a police officer is genuine?",
    "What is the process for obtaining a character certificate?",
    "How to report a fake police officer?",
    "What is the procedure for surrendering illegal items (e.g., weapons, drugs)?",
    "How to report a forged document?",
    "What should I do if I witness a crime?",
    "How to report child abuse or exploitation?",
    "What is the process for reporting elder abuse?",
    "How to report animal cruelty?",
    "What should I do if I receive a threatening call or message?",
    "How to report a traffic violation?",
    "What is the process for recovering a towed vehicle?",
    "How to report a drunk driver?",
    "What should I do if my vehicle is stolen?",
    "How to report a parking violation?",
    "How to organize a community safety meeting with the police?",
    "What is the process for reporting a public nuisance?",
    "How to report a hate crime?",
    "What should I do if I find unclaimed luggage or suspicious items in public?",
    "How to report a violation of COVID-19 guidelines?",
    "How to report a violation of environmental laws?",
    "What is the process for reporting a violation of labor laws?",
    "How to report a violation of building codes?",
    "What should I do if I find a lost pet?",
    "How to report a violation of public health guidelines?",

    "What is the emergency number for police?",
    "What is the emergency number for fire services?",
    "What is the emergency number for ambulance services?",
    "What is the helpline number for women in distress?",
    "What is the child helpline number?",
    "What is the mental health helpline number?",
    "What is the emergency number for disaster management?",
    "What is the helpline number for cybercrime?",
    "What is the emergency number for road accidents?",
    "What is the helpline number for senior citizens?",
    "What is the emergency number for poison control?",
    "What is the helpline number for drug abuse?",
    "What is the emergency number for railway accidents?",
    "What is the helpline number for human trafficking?",
    "What is the emergency number for animal rescue?",
    "What is the helpline number for LGBTQ+ support?",
    "What is the emergency number for coastal security?",
    "What is the helpline number for missing persons?",
    "What is the emergency number for bomb threats?",
    "What is the helpline number for suicide prevention?",

    
    "வணக்கம்",
    "ஹாய்",
    "காலை வணக்கம்",
    "மதிய வணக்கம்",
    "மாலை வணக்கம்",
    "எப்படி இருக்கிறீர்கள்?",

    
    "FIR எப்படி பதிவு செய்வது?",
    "காணாமல் போன பொருட்களை பற்றி என்ன செய்ய வேண்டும்?",
    "சைபர் குற்றத்தை எப்படி புகார் செய்வது?",
    "பாஸ்போர்ட் சரிபார்ப்புக்கு என்ன ஆவணங்கள் தேவை?",
    "காணாமல் போன நபரை பற்றி புகார் செய்ய எப்படி?",
    "போக்குவரத்து விபத்து ஏற்பட்டால் என்ன செய்ய வேண்டும்?",
    "காவல்துறை அனுமதிச் சான்றிதழ் பெற எப்படி விண்ணப்பிப்பது?",
    "குடும்ப வன்முறை புகார் எப்படி செய்வது?",
    "திருட்டு புகார் எப்படி செய்வது?",
    "துப்பாக்கி உரிமம் பெற எப்படி விண்ணப்பிப்பது?",
    "வேட்டையாடுதல் அல்லது தொந்தரவு புகார் எப்படி செய்வது?",
    "ஒலி மாசு புகார் எப்படி செய்வது?",
    "மோசடி அல்லது ஏமாற்று புகார் எப்படி செய்வது?",
    "காவல்துறை எஸ்கார்ட் பெற எப்படி கோரிக்கை செய்வது?",
    "ஹிட் அண்ட் ரன் சம்பவத்தை புகார் செய்ய எப்படி?",
    "காவல்துறை அதிகாரிக்கு எதிராக புகார் எப்படி செய்வது?",
    "சந்தேகத்திற்குரிய செயல்பாட்டை புகார் செய்ய எப்படி?",
    "காவல்துறை அறிக்கையின் நகலை பெற எப்படி?",
    "மருந்து தொடர்பான குற்றத்தை புகார் செய்ய எப்படி?",
    "ஒலி மாசு புகார் எப்படி செய்வது?",
]

// Function to add a message to the chat window
function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    messageElement.textContent = message;

    // Adjust message bubble size based on message length
    if (message.length > 100) {
        messageElement.style.maxWidth = '90%'; // Wider bubble for longer messages
    } else if (message.length > 50) {
        messageElement.style.maxWidth = '80%'; // Medium width for medium messages
    } else {
        messageElement.style.maxWidth = '70%'; // Default width for short messages
    }

    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the latest message
}

// Function to send a message to the backend
async function sendMessageToBackend(message) {
    try {
        console.log("Sending message to backend:", message);  // Debugging: Print the message
        const response = await fetch('http://localhost:5000/get_response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_input: message }), // Match the Flask route's expected key
        });
        const data = await response.json();
        console.log("Backend response:", data);  // Debugging: Print the backend response
        return data.response; // Return the bot's response
    } catch (error) {
        console.error('Error sending message to backend:', error);  // Debugging: Print the error
        return "Sorry, I encountered an error. Please try again later.";
    }
}

// Function to display the initial "What can I help with?" message
function displayWelcomeMessage() {
    const welcomeMessage = "What can I help with?";
    const messageElement = document.createElement('div');
    messageElement.classList.add('welcome-message'); // Add the welcome message class
    messageElement.textContent = welcomeMessage;
    chatWindow.appendChild(messageElement);
}

// Function to remove the welcome message
function removeWelcomeMessage() {
    const welcomeMessageElement = chatWindow.querySelector('.welcome-message');
    if (welcomeMessageElement) {
        welcomeMessageElement.remove(); // Remove the welcome message
    }
}

// Function to filter related questions based on user input
function filterQuestions(input) {
    return allQuestions.filter(question =>
        question.toLowerCase().includes(input.toLowerCase())
    );
}

// Function to display related questions
function showRelatedQuestions(input) {
    const filteredQuestions = filterQuestions(input);
    relatedQuestions.innerHTML = ''; // Clear previous suggestions

    if (input.trim() === '') {
        relatedQuestions.style.display = 'none'; // Hide if input is empty
        return;
    }

    if (filteredQuestions.length > 0) {
        // Limit the number of suggestions to 5 or 6
        const maxSuggestions = 5;
        const limitedQuestions = filteredQuestions.slice(0, maxSuggestions);

        limitedQuestions.forEach(question => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.textContent = question;
            questionElement.addEventListener('click', () => {
                userInput.value = question; // Auto-fill the input with the selected question
                relatedQuestions.style.display = 'none'; // Hide suggestions after selection
            });
            relatedQuestions.appendChild(questionElement);
        });
        relatedQuestions.style.display = 'block'; // Show suggestions
    } else {
        relatedQuestions.style.display = 'none'; // Hide if no suggestions
    }
}

// Event listener for the send button
sendButton.addEventListener('click', async () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        // Remove the welcome message if it exists
        removeWelcomeMessage();

        addMessage(`${userMessage}`, true); // Add user message
        userInput.value = ''; // Clear input field

        // Send message to backend and get bot response
        const botResponse = await sendMessageToBackend(userMessage);
        addMessage(`${botResponse}`, false); // Add bot response
    } else {
        alert("Please enter a message!"); // Prevent empty messages
    }
});

// Allow pressing Enter to send a message
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

// Event listener for user input
userInput.addEventListener('input', () => {
    showRelatedQuestions(userInput.value);
});

// Hide suggestions when clicking outside
document.addEventListener('click', (event) => {
    if (!relatedQuestions.contains(event.target)) {
        relatedQuestions.style.display = 'none';
    }
});

// Display the welcome message when the page loads
window.onload = displayWelcomeMessage;