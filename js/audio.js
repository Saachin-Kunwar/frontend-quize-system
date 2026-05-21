const bgMusic=

new Audio(
"./assets/bg.mp3"
);

bgMusic.loop=true;


const correctSound=

new Audio(
"./assets/correct.mp3"
);


const wrongSound=

new Audio(
"./assets/wrong.mp3"
);


function startMusic(){

bgMusic.volume=.3;

bgMusic.play();

}