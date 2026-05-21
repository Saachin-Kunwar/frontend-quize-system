const welcome =
document.querySelector(
".welcome"
);

const game =
document.querySelector(
".game"
);

const start =
document.getElementById(
"start"
);

const username =
document.getElementById(
"username"
);

const avatar =
document.getElementById(
"avatar"
);

const q =
document.getElementById(
"q"
);

const timerEl =
document.getElementById(
"timer"
);

const optionUI =
document.querySelectorAll(
".option"
);

const tree =
document.getElementById(
"tree"
);

const result =
document.getElementById(
"result"
);

const title =
document.getElementById(
"title"
);

const money =
document.getElementById(
"money"
);

const levels = [

1000,
2000,
3000,
5000,
10000,
20000,
40000,
80000,
160000,
320000,
640000,
1250000,
2500000,
5000000,
10000000

];

levels
.slice()
.reverse()
.forEach(v=>{

tree.innerHTML +=

`

<li class="${
v===10000 ||
v===320000
?
"safe":""
}">

Rs${v}

</li>

`;

});

let index = 0;

let current;



start.onclick = ()=>{

if(
username.value.trim()
===""
){

alert(
"Enter username"
);

return;

}

/* profile */

document
.getElementById(
"userName"
)

.innerText =
username.value;


document
.getElementById(
"userAvatar"
)

.innerText =
avatar.value;


/* music */

startMusic();

/* SCREEN SWITCH */

welcome.style.display =
"none";

game.style.display =
"grid";

/* load first question */

loadQuestion();

};



function loadQuestion(){

clearInterval(
timer
);

current =
QUESTIONS[
index
];

if(!current){

win();

return;

}

q.innerText =
current.question;


optionUI.forEach(
(btn,i)=>{

btn.innerText =
current.options[i];

btn.className =
"option";

btn.disabled =
false;

btn.style.opacity=1;


btn.onclick =
()=>pick(
btn,
i
);

});

highlight();

startTimer();

}



function pick(
btn,
i
){

optionUI.forEach(
x=>x.disabled=true
);

btn.classList.add(
"locked"
);


setTimeout(()=>{

if(
i===
current.answer
){

correctSound.play();

btn.classList.add(
"correct"
);

index++;

setTimeout(
loadQuestion,
1500
);

}

else{

wrongSound.play();

btn.classList.add(
"wrong"
);

lose();

}

},1500);

}



function lose(){

let amount=0;

if(index>=10)
amount=320000;

else if(index>=5)
amount=10000;


show(
"GAME OVER",
amount
);

}



function win(){

show(
"VICTORY",
10000000
);

}



function show(
txt,
amount
){

clearInterval(
timer
);

result.classList.remove(
"hidden"
);

title.innerText=
txt;

money.innerText=
"Rs"+amount;


saveScore(
amount
);

renderBoard();

}



function highlight(){

document
.querySelectorAll(
"#tree li"
)

.forEach(
x=>

x.classList.remove(
"current"
)

);

let li=

document
.querySelectorAll(
"#tree li"
);


if(
li[
li.length-
1-
index
]
){

li[
li.length-
1-
index
]

.classList.add(
"current"
);

}

}