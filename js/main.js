
const html = document.querySelector('html');

const character= document.querySelector('#character');
var block= document.querySelector('#block');


const jump = ()=>{
    if(character.classList!='animate'){
        console.log('JUMP');
        character.style.backgroundImage = 'url("img/Character/jump.gif")'
        character.classList.add('animate');
    }
    setTimeout(()=>{
        character.classList.remove('animate');
        character.style.backgroundImage = 'url("img/Character/run.gif")'
    },500);
}

// jump();

let counter = 0;




var characterTop;
var blockLeft;
var checkDead = setInterval(() => {

    characterTop= 
    parseInt(window.getComputedStyle(character).
    getPropertyValue('top'));
    blockLeft= 
    parseInt(window.getComputedStyle(block).
    getPropertyValue('left'));

    // if(blockLeft<10 && blockLeft>0 && characterTop >=263){
    if(blockLeft<100 && blockLeft>0 &&characterTop >=506){
        console.log(blockLeft);
        console.log(characterTop);
        block.style.animation ='none'
        block.style.display ='none'
        // alert('You lose.')
        character.style.backgroundImage = 'url("img/Character/dead.gif")'
        setTimeout(function(){
            character.style.backgroundImage = 'url("img/Character/idle.gif")'
        },1500)
    }else{

    }

}, 10);





html.addEventListener( 'click', ()=>{
    jump();
    
    
    if(blockLeft<100 && blockLeft>0 &&characterTop >=263){
        console.log('End');
    }else{
        counter++;
        console.log(counter);
        let counterin = document.querySelector('#counter');
        counterin.innerHTML= `Counter: ${counter}`
    }
    
    // setTimeout(()=>{
    //         counter++;
    //         let counterin = document.querySelector('#counter');
    //         counterin.innerHTML= `Counter: ${counter}`
    //     },2000)

    
})






document.querySelector('#name').addEventListener( 'click', ()=>{
    // var characterTop= 
    // parseInt(window.getComputedStyle(character).
    // getPropertyValue('top'));
    // var blockLeft= 
    // parseInt(window.getComputedStyle(block).
    // getPropertyValue('left'));
    console.log('name--------------------------');
    console.log(blockLeft);
    console.log(characterTop);

})
