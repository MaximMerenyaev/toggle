let player  = document.getElementById(`player`);
let x = 0;

document.addEventListener(`keydown`, (evt)=> {
    
    if(evt.key == "ArrowLeft" && x === 300){
        x -=300;
    } else if(evt.key == "ArrowRight" && x === 0){
        x +=300;
    }
    player.style.left = x + `px`;
    
})