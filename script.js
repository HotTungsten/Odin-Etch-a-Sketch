const SIZE = 16

function createGrid(gridSize){
    //specified grid of boxes
    let totalGrid = gridSize * gridSize + (gridSize + 1);
    const gridBox = document.querySelector('.gridBox');
    for(let i = 0; i < totalGrid; i++){
        const div = document.createElement('div');
        const hr = document.createElement('hr');
        if(i % (gridSize+1) == 0){
            div.classList.add('break');
        }
        else {
            div.classList.add('default');
            div.style.height = 300/gridSize + 'px';
            div.style.width = 300/gridSize + 'px';
        }
        gridBox.appendChild(div);
    }
}

createGrid(SIZE);

//colors grid when moused over
let sketchBox = document.querySelectorAll('.default');
let breaks = document.querySelectorAll('.break');
sketchBox.forEach(sketchBox => sketchBox.addEventListener('mouseover', function() {
    this.classList.add('mousedOver');
}));

//removes color from all the boxes, allows new grid to be created
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function(){
    sketchBox.forEach(sketchBox => sketchBox.remove("mousedOver", "default"));
    breaks.forEach(breaks => breaks.remove('break'));
    //initialized outside of do-while -- scope
    let gridPrompt;
    do {
        gridPrompt = parseInt(prompt("Please enter new grid dimensions (max 100): "), 10);
    }while(isNaN(gridPrompt) || gridPrompt > 100);

    //recreates grid with sketching enabled
    createGrid(gridPrompt);
    sketchBox = document.querySelectorAll('.default');
    sketchBox.forEach(sketchBox => sketchBox.addEventListener('mouseover', function() {
        this.classList.add('mousedOver');
    }));
    
});
