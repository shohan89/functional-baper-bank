function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    inputField.value = "";
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElemet = document.getElementById(elementId);
    const textElementValueStr = textElemet.innerText;
    const textElementValue = parseFloat(textElementValueStr);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

