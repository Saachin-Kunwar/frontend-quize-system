[]
function saveScore(
score
){

let data=

JSON.parse(

localStorage.getItem(
"leaderboard"
)

)||[];


data.push({

user:
username.value,

avatar:

document
.getElementById(
"avatar"
)

.value,

score

});


data.sort(
(a,b)=>

b.score-a.score

);


localStorage.setItem(

"leaderboard",

JSON.stringify(
data
)

);

}



function renderBoard(){

let data=

JSON.parse(

localStorage.getItem(
"leaderboard"
)

)||[];


let html="";


data
.slice(
0,5
)

.forEach(
x=>{

html+=`

<p>

${x.avatar}

${x.user}

-

Rs${x.score}

</p>

`;

});


document
.getElementById(
"board"
)

.innerHTML=html;

}