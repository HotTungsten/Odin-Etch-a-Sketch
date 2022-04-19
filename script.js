const SIZE = 16*16 + 17;

const container = document.querySelector('.container');

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
    container.appendChild(div);
}

//colors grid when moused over
const sketchBox = document.querySelectorAll('.default');
sketchBox.forEach(sketchBox => sketchBox.addEventListener('mouseover', function(e) {
    this.classList.add('mousedOver');
}));

//removes color from all the boxes
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function(){
    sketchBox.forEach(sketchBox => sketchBox.classList.remove("mousedOver"));
});