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
        div.classList.add('grid');
    }
    container.appendChild(div);
}

const sketchBox = document.querySelectorAll('.grid');
sketchBox.forEach(sketchBox => sketchBox.addEventListener('mouseover', function(e) {
    this.classList.add('mousedOver');
}));