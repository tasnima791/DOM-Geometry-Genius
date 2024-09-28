// console.log('Hello');

// Triangle
function calculateTriangleArea(){
    // base
    const baseInput = document.getElementById('triangle-base');
    const baseText = baseInput.value;
    const base = parseFloat (baseText);
 
    // height
    const heightInput = document.getElementById('triangle-height');
    const heightText = heightInput.value;
    const height = parseFloat (heightText);
 
    //calculated
    const area = 0.5 * base * height;
 
    const final = document.getElementById('triangle-area');
    final.innerText = area;
 }
 
 
 //Rectangle
 function calculateRectangleArea(){
    // base
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
 
    // height
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
 
    //calculated
    const area = width * length;
 
    const final = document.getElementById('rectangle-area');
    final.innerText = area;  
 }