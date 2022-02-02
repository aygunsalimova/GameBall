let bar = document.querySelector('.bar');
let ball = document.querySelector('.ball');

let barX = 0;
let ballX = 0;
let ballY = 0;

let player = document.querySelector("#player");
let computer = document.querySelector("#computer");


document.onkeydown = barMove;

function barMove(e) {

    e = e || window.event;
    if (e.keyCode == "39") {
        if (barX < 0 || barX < 600) {
            barX += 25;
        }
    }


    if (e.keyCode == "37") {
        if (barX > 0) {
            barX -= 25;
        }
    }


    bar.style.left = barX + 'px';

}



setInterval(() => {
    if (ballX == 0 || ballY == 0) {
        ballX += Math.floor(Math.random() * 100);
        ballY += Math.floor(Math.random() * 100);
    } else {
        ballX += Math.floor(Math.random() * 100);
        ballY += Math.floor(Math.random() * 100);
    }
    ball.style.left = ballX + 'px';
    ball.style.right = ballX + 'px';
    ball.style.top = ballY + 'px';
    ball.style.bottom = ballY + 'px';



}, 500);

function score() {
    //player.innerHTML = '50';  

}

score();