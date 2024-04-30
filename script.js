score = 0;
document.onkeydown = function (e) {
    console.log(e);
    // if (e.code == 'ArrowUp') {
    //     dino = document.querySelector('.dino');
    //     dino.classList.add('animateDino');

    //     setTimeout(() => {
    //         dino.classList.remove('animateDino')
    //     }, 700);
    // }

    if(e.key == 'ArrowUp'){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'));
        dino.style.bottom = (dinoX + 112) + "px";
    }

    if(e.key == 'ArrowDown'){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'));
        dino.style.bottom = (dinoX - 112) + "px";
    }

    if(e.key == 'ArrowRight'){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }

    if(e.key == 'ArrowLeft'){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    obstacle = document.querySelector('.obstacle');
    obstacle2 = document.querySelector('.obstacle2');
    obstacle3 = document.querySelector('.obstacle3');
    obstacle4 = document.querySelector('.obstacle4');
    obstacle5 = document.querySelector('.obstacle5');
    gameOver = document.querySelector('.gameOver');
    // finScore = document.getElementById('#finalScore');

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    dz = parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    o2x = parseInt(window.getComputedStyle(obstacle2, null).getPropertyValue('left'));
    o2y = parseInt(window.getComputedStyle(obstacle2, null).getPropertyValue('top'));

    o3x = parseInt(window.getComputedStyle(obstacle3, null).getPropertyValue('left'));
    o3y = parseInt(window.getComputedStyle(obstacle3, null).getPropertyValue('top'));

    o4x = parseInt(window.getComputedStyle(obstacle4, null).getPropertyValue('left'));
    o4y = parseInt(window.getComputedStyle(obstacle4, null).getPropertyValue('top'));

    o5x = parseInt(window.getComputedStyle(obstacle5, null).getPropertyValue('left'));
    o5y = parseInt(window.getComputedStyle(obstacle5, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    offsetZ = Math.abs(dz-oy);

    offset2X = Math.abs(dx-o2x);
    offset2Y = Math.abs(dy-o2y);

    offset3X = Math.abs(dx-o3x);
    offset3Y = Math.abs(dy-o3y);

    offset4X = Math.abs(dx-o4x);
    offset4Y = Math.abs(dy-o4y);

    offset5X = Math.abs(dx-o5x);
    offset5Y = Math.abs(dy-o5y);

    console.log(offsetX,offsetY);
    if((offsetX< 150  && offsetY<55) ||( offset2X< 130  && offset2Y<52) ||( offset3X< 150  && offset3Y<52) ||( offset4X< 140  && offset4Y<52) ||( offset5X< 140  && offset5Y<52)){
        gameOver.style.visibility = 'visible';    
        obstacle.classList.remove('obstacleAni');
        obstacle2.classList.remove('obstacleAni2');
        obstacle3.classList.remove('obstacleAni3');
        obstacle4.classList.remove('obstacleAni4');
        obstacle5.classList.remove('obstacleAni5');
        finScore.style.visibility = 'visible';
    }   
    else{
        if(gameOver.style.visibility != 'visible'){
        score++;
        updateScore(score);
    }
 }
}, 100);

function updateScore(score)
{
    scoreCount.innerHTML = "Your Score: "+score
    finalScore.innerHTML = "Final Score: "+score
    return;
}
