// Sélection des éléments du DOM
const passwordLengthInput = document.getElementById('password-length');
const includeNumbersCheckbox = document.getElementById('include-numbers');
const includeUppercaseCheckbox = document.getElementById('include-uppercase');
const includeLowercaseCheckbox = document.getElementById('include-lowercase');
const includeSpecialCharactersCheckbox = document.getElementById('include-special-characters');
const generatePasswordButton = document.getElementById('generate-password');
const passwordDisplay = document.getElementById('password-display');
const copyPasswordButton = document.getElementById('copy-password');

// Fonction de génération du mot de passe
function generatePassword() {
    const length = parseInt(passwordLengthInput.value);
    const includeNumbers = includeNumbersCheckbox.checked;
    const includeUppercase = includeUppercaseCheckbox.checked;
    const includeLowercase = includeLowercaseCheckbox.checked;
    const includeSpecialCharacters = includeSpecialCharactersCheckbox.checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=<>?';

    let charSet = '';

    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numbers;
    if (includeSpecialCharacters) charSet += specialCharacters;

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
}

// Fonction pour afficher le mot de passe généré
function displayGeneratedPassword() {
    const password = generatePassword();
    passwordDisplay.textContent = password;
}

// Fonction pour copier le mot de passe généré dans le presse-papiers
function copyGeneratedPassword() {
    const textarea = document.createElement('textarea');
    textarea.value = passwordDisplay.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Le mot de passe a été copié dans le presse-papiers');
}

// Gestion des événements
generatePasswordButton.addEventListener('click', displayGeneratedPassword);
copyPasswordButton.addEventListener('click', copyGeneratedPassword);
