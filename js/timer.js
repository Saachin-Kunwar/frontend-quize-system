let timer;

function startTimer(){

clearInterval(
timer
);

let t=30;

timerEl.innerText=t;

timer=
setInterval(()=>{

t--;

timerEl.innerText=t;

if(
t<=0
){

clearInterval(
timer
);

lose();

}

},1000);

}