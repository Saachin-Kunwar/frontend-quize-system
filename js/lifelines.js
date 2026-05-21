let used50=false;

let usedFlip=false;



fifty.onclick=()=>{

if(
used50
)return;

used50=true;

let c=0;

optionUI.forEach(
(btn,i)=>{

if(
i!==current.answer
&&
c<2
){

btn.style.opacity=.2;

btn.disabled=true;

c++;

}

});

};



flip.onclick=()=>{

if(
usedFlip
)return;

usedFlip=true;

index++;

loadQuestion();

};



aud.onclick=()=>{

alert(

"Audience chooses option "+

(
current.answer+1
)

);

};