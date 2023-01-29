function getInputValue(id) {
    const getInputField = document.getElementById(id);
    const getInput = getInputField.value;
    const inputValue = parseFloat(getInput);
    getInputField.value = '';
    return inputValue;
};

function getTotalValue(id) {
    const getElementById = document.getElementById(id);
    const getElement = getElementById.innerText;
    const getElementValue = parseFloat(getElement);
    return getElementValue;
};

function setElementNewValue(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}