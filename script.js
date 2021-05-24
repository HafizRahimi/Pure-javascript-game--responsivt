const video = document.querySelector('#video');
const info = document.querySelector('#info');
const game = document.querySelector('#game');
const character = document.querySelector('#character');
const block = document.querySelector('#block');
const gameOver = document.querySelector('#gameOver');
const gameWin = document.querySelector('#gameWin');

let counter = 0;

function jump() {
    if (character.classList == 'animate') {
        return;
    }
    character.classList.add('animate');
    character.style.backgroundImage ='url("img/Character/jump.gif")';
    setTimeout(function () {
        character.classList.remove('animate');
        character.style.backgroundImage ='url("img/Character/run.gif")';
    }, 300);
}

const stopCheckDead = () => {
    clearInterval(checkDead);
    video.classList = "show-not";
    info.classList = "show-not";
    game.classList = "show-not";
    gameWin.classList = "info-box game-win show"
};



const checkDeadFunction = () => {
    let characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue('top')
    );
    let blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue('left')
    );


    if (blockLeft < bLeft1 && blockLeft > bLeft2 && characterTop >= cTop) {
        block.style.animation = 'none';
        // alert('Game Over. Score : ' + Math.floor(counter / 100));
        
        video.classList = "show-not";
        game.classList = "show-not";
        gameOver.classList = "info-box game-over show"
        counter = 0;
        block.style.animation = 'block 1s infinite linear';
        clearInterval(checkDead);
    } else {
        counter++;
        let counterF = Math.floor(counter / 100)
        document.getElementById('gameScore').innerHTML =`Score : ${counterF}`;

        if(counterF > 5 ){
            console.log('stopCheckDead run');
            stopCheckDead()
        }
    }
}



let w = window.innerWidth;
let h = window.innerHeight;

console.log(w);

let bLeft1 = 0;
let bLeft2 = 0;
let cTop = 0;

if(w === 1440){
    console.log(w);
    bLeft1 = 100;
    bLeft2 = -100;
    cTop = 500;
    var checkDead = setInterval(checkDeadFunction, 10);
}else{
    console.log('Whatd fff ');
    video.classList = "show-not";
    game.classList = "show-not";
}



