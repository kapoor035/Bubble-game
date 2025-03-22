var clutter = " ";
var timer = 60;
var score = 0;
var hitrn;

function makeBubble() {
    for (var i=0; i<=200; i++){
        rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function() {
        if(timer>0){
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }else{
            clearInterval(timerInt);
            document.querySelector('#pbtm').innerHTML = "<h1>Game Over. Thanks for Playing.</h1>";
        }
        
    },1000)
}

function getNewHit (){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitVar').textContent = hitrn;
}

function increaseScore (){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click', function(dets){
var clickedNo = Number(dets.target.textContent);
if(clickedNo === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
})

makeBubble();
runTimer();
getNewHit();