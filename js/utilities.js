function setBackgroundColorClassName(getElementsByClassName){
    const element = document.getElementById(getElementsByClassName);
    element.classList.add('bg-green-400');
}


function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
