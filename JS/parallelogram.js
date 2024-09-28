// Parallelogram
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');


    const area = base * height;
    // console.log(area);
    setInnerText('parallelogram-area', area);
 }
 
 function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
 }
 
 function setInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
 }