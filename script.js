const SIZE = 16*16 + 17;

const gridBox = document.querySelector('.gridBox');

//16x16 grid of boxes
for(let i = 0; i < SIZE; i++){
    const div = document.createElement('div');
    const hr = document.createElement('hr');
    if(i % 17 == 0){
        div.classList.add('break');
    }
    else {
        div.classList.add('default');
    }
    gridBox.appendChild(div);
}

//colors grid when moused over
const sketchBox = document.querySelectorAll('.default');
sketchBox.forEach(sketchBox => sketchBox.addEventListener('mouseover', function() {
    this.classList.add('mousedOver');
}));

//removes color from all the boxes, allows new grid to be created
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function(){
    sketchBox.forEach(sketchBox => sketchBox.classList.remove("mousedOver"));

    //initialized outside of do-while -- scope
    let gridPrompt;
    do {
        gridPrompt = parseInt(prompt("Please enter new grid dimensions (max 100): "), 10);
    }while(isNaN(gridPrompt) || gridPrompt > 100);


});
