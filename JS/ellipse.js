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