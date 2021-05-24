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

let mq = window.matchMedia('(max-width: 2560px)');
let mq1 = window.matchMedia('(max-width: 1440px)');
let mq2 = window.matchMedia('(max-width: 1024px)');
let mq3 = window.matchMedia('(max-width: 768px)');
let mq4 = window.matchMedia('(max-width: 425px)');
let mq5 = window.matchMedia('(max-width: 375px)');
let mq6 = window.matchMedia('(max-width: 320px)');

// console.log(mql.matches);



let bLeft1 = 0;
let bLeft2 = 0;
let cTop = 0;

if(mq6.matches){
    console.log('320');
}else if(mq5.matches){
    console.log('375');
}else if(mq4.matches){
    console.log('425');
}else if(mq3.matches){
    console.log('768');
}else if(mq2.matches){
    console.log('1024');
}else if(mq1.matches){
    console.log('1440');
    bLeft1 = 100;
    bLeft2 = -100;
    cTop = 500;
    var checkDead = setInterval(checkDeadFunction, 10);
}else{
    console.log('Whatd fff ');
    video.classList = "show-not";
    game.classList = "show-not";
}



