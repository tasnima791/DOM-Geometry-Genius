// Ellipse
function calculateEllipseArea(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');
  
    const area = 3.14 * a * b;

    setInnerText('ellipse-area', area)  
}


// Rhombus
function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-base');
    const d2 = getInputValue('rhombus-height');

    const area = 0.5 * d1 * d2

    setInnerText('rhombus-area', area)
}


// Pentagon
function calculatePentagonArea(){
    const p = getInputValue('pentagon-perimeter');
    const b = getInputValue('pentagon-base');

    const area = 0.5 * p * b

    setInnerText('pentagon-area', area)
}


// Total Area

    // const triangleArea = document.getElementById('triangle-area')
    // console.log(triangleArea);

function calculateTotalArea() {

    const triangleArea = parseFloat(document.getElementById('triangle-area').innerText) ;
    const rectangleArea = parseFloat(document.getElementById('rectangle-area').innerText) ;
    const parallelogramArea = parseFloat(document.getElementById('parallelogram-area').innerText);
    const rhombusArea = parseFloat(document.getElementById('rhombus-area').innerText) ;
    const pentagonArea = parseFloat(document.getElementById('pentagon-area').innerText) ;
    const ellipseArea = parseFloat(document.getElementById('ellipse-area').innerText);

    const totalArea = triangleArea + rectangleArea + parallelogramArea + rhombusArea + pentagonArea + ellipseArea;
    
    document.getElementById('total-area').innerText = totalArea;
}






