const rotate = ()=>{
    const cubes = document.querySelectorAll('.cube');
    Array.from(cubes).forEach(cube=>cube.style.transform = `rotateY(${pos}deg)`);
}
document.querySelector('.right-arrow').addEventListener('click', ()=> {
    pos += 90;
    rotate();
});
document.querySelector('.left-arrow').addEventListener('click', ()=> {
    pos -= 90;
    rotate();
});
let btnStart=document.querySelector('.play-pause');
let pos = 0;

document.querySelector('.right-arrow').addEventListener('mouseover', () =>{
    pos += 30;
    rotate();
});
document.querySelector('.left-arrow').addEventListener('mouseover', () =>{
    pos -= 30;
    rotate();
});
document.querySelector('.right-arrow').addEventListener('mouseout', () =>{
    pos -= 30;
    rotate();
});
document.querySelector('.left-arrow').addEventListener('mouseout', () =>{
    pos += 30;
    rotate();
});

var cubeInterval = setInterval(nextCube, 2000);
function nextCube(){
    pos -= 90;
    rotate();
}
var playing = true;
function pauseCube(){
    btnStart.innerHTML = `<i class="fas fa-play">`;
    playing = false;
    clearInterval(cubeInterval);
}
function playCube(){
    btnStart.innerHTML = `<i class="fas fa-pause">`;
    playing = true;
    cubeInterval = setInterval(nextCube, 2000);
}
btnStart.onclick = function(){
    if(playing){pauseCube(); }
    else{playCube();}
}