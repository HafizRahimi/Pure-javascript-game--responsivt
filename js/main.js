const html = document.querySelector('html');
const loginGame = document.querySelector('#loginGame');
const userName = document.querySelector('#userName');
const startGameBtn = document.querySelector('#startGameBtn');
const loseGame = document.querySelector('#loseGame');
const winGame = document.querySelector('#winGame');
const video = document.querySelector('#video');
const game = document.querySelector('#game');
const character = document.querySelector('#character');
const block = document.querySelector('#block');


let score = 0;
let heart = 3;
let gamerName = document.querySelector('#name');
let gameScore = document.querySelector('#gameScore');


startGameBtn.addEventListener('click', () => {
    loginGame.className = 'info-box login-game';

    const name = userName.value;
    gamerName.innerHTML = `${name}:${heart}`;
    
    console.log('btn Clicked');


    video.className = 'video show';
    game.className = 'game show';

    const checkDead = setInterval(() =>{
        let characterTop = parseInt(
            window.getComputedStyle(character).getPropertyValue('top')
        );
        let blockLeft = parseInt(
            window.getComputedStyle(block).getPropertyValue('left')
        );

        const characterAnimate = () => {
            character.className = 'character animate__animated animate__flash ';
            setTimeout(function () {
                character.className = 'character';
            }, 900);
        };

        const StopCheckDead = () => {
            clearInterval(checkDead);
            video.className = 'video';
            game.className = 'game';
            console.log('Game aver');
            loseGame.className ='info-box lose-game show'
        };


        console.log(characterTop);

        if ((blockLeft = 10 && blockLeft > 0 && characterTop >= 360)) {
            heart--;
            characterAnimate();
            // gamerName.innerHTML= `${userName}:${heart}`
            gamerName.innerHTML = `${name}:${heart}`;
            if (heart < 1) {
                StopCheckDead();
            }
        } else {
            gameScore.innerHTML = `Score:${score}`;
            if(score == 5){
                video.className = 'video'
                game.className ='game'
                winGame.className = 'info-box win-game show'
            }
        }

    }, 2000);
});



html.addEventListener('click',() => {
    if(loginGame.className === 'info-box login-game'){
        if (character.classList != 'animate') {
            console.log('JUMP');
            character.style.backgroundImage =
                'url("img/Character/jump.gif")';
            character.classList.add('animate');
        }
        setTimeout(() => {
            character.classList.remove('animate');
            character.style.backgroundImage =
                'url("img/Character/run.gif")';
            if (heart > 0) score++;
        }, 500);
    }
})


