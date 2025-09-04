const { use } = require("react");

// User preference handling
let userTheme = localStorage.getItem('theme');
let defaultTheme = 'light';
let currentTheme;

currentTheme = userTheme ?? defaultTheme;

// Form validation
function validateForm(email) {
    let errorMessage = !email ? 'Email is required' : null;

    return errorMessage;
}


// API response handling
function processUserData(userData) {
    if (!userData) {
        return
    }
   
    const userName = userData.userName?.trim() ?? 'Friend';

    const notificationText = `${userData.notifications} ${(userData.notifications > 1 || userData.notifications == 0) ? 'notification' : 'notification'}`;

    const greeting = `Hello, ${userName}. You have ${notificationText}`
   
}


// Dynamic class assignment
function getButtonClass(isActive) {
    let buttonClass;
   
    if (isActive) {
        buttonClass = 'btn-active';
    } else {
        buttonClass = 'btn-inactive';
    }


    return buttonClass;
}