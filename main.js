const inputContainer = document.querySelector('.banana-talk-input');
const outputContainer = document.querySelector('.banana-talk-output');
const translationBtn = document.querySelector('.banana-talk-btn');

const API_URL = "https://api.funtranslations.com/translate/minion.json";

console.log(translationBtn);

const getTranslationURL = text => {
    return API_URL + "?text=" + text;
}

const setText = text => {
    outputContainer.innerText = text;
}  

const clickHandler = () => {
     const inputText = inputContainer.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(res => {
        const result = res.contents;
        const { translated: bananaText } = result;
        outputContainer.innerText = bananaText;
    })
    .catch(err => {
        console.log('The API encountered some error!');
    })
}

translationBtn.addEventListener('click', clickHandler)
