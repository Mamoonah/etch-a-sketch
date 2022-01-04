let paintArea = document.querySelector('#grid');
let slider = document.querySelector('#squares-quantity');
let resetButton = document.querySelector('#reset');
let rainbow = document.getElementById('rainbow');

let rainbowMode;

rainbow.addEventListener('click', () => {
    rainbowMode = rainbow.checked;
    sizeUpdate();
})

slider.addEventListener('change', sizeUpdate)
resetButton.addEventListener('click', sizeUpdate)

sizeUpdate()

function sizeUpdate(){
    let squaresNumber = document.querySelector('.squares-number');
    let gridWidth = parseInt(slider.value)
    let squares = document.querySelectorAll('.square')
    
    squares.forEach(item => {
        paintArea.removeChild(item);
    })
    createSquares(paintArea, gridWidth)

    squaresNumber.innerText = gridWidth**2
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
    if(rainbowMode){
        e.target.style['background-color'] = `rgba(${Math.random()*200}, ${Math.random()*200}, ${Math.random()*200}, 1)`;
    } else {
        e.target.style['background-color'] = 'rgba(0, 0, 0, 0.7)'
    }
    e.target.removeEventListener('mouseover', changeColor);
}