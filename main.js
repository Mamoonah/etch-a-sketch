let paintArea = document.querySelector('#grid');
let slider = document.querySelector('#size-slider');
let resetButton = document.querySelector('#reset');
let paintingMode = 'normal';

let rainbowMode;

slider.addEventListener('change', sizeUpdate)
resetButton.addEventListener('click', sizeUpdate)

sizeUpdate()

function sizeUpdate(){
    let gridWidth = parseInt(slider.value)
    let squares = document.querySelectorAll('.square')
    
    squares.forEach(item => {
        paintArea.removeChild(item);
    })
    createSquares(paintArea, gridWidth)

    paintArea.style['grid-template-rows'] = `repeat(${gridWidth}, 1fr)`
    paintArea.style['grid-template-columns'] = `repeat(${gridWidth}, 1fr)`
}

function createSquares(parrent, quantity){
    for(let i = 0; i < quantity**2; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', changeColor)
        square.classList.add('square')
        parrent.appendChild(square)
    }
}

function changeColor(e){
    paintingMode = document.querySelector('input[name="mode"]:checked').value;
    if(paintingMode === 'rainbow'){
        e.target.style['background-color'] = `rgba(${Math.random()*200}, ${Math.random()*200}, ${Math.random()*200}, 1)`;
    } else {
        e.target.style['background-color'] = 'rgba(0, 0, 0, 0.7)'
    }
    e.target.removeEventListener('mouseover', changeColor);
}