let paintArea = document.querySelector('#grid');
let slider = document.querySelector('#squares-quantity')

slider.addEventListener('change', sizeUpdate)

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
        square.classList.add('square')
        parrent.appendChild(square)
    }
}