// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const setTimerButton = document.getElementById('setTimer');
const time = document.getElementById('time');
const set_time = document.getElementById('set-time');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');

const player = document.getElementById('drum_roll_player');
const playerButton = document.getElementById('drum_roll');
var playing = false;


if (!!setTimerButton)
    setTimerButton.addEventListener('click', function (event) {
        const countdown = time.value * 60;
        startTimer(countdown, minutes, seconds);
    });

if (!!playerButton)
    playerButton.addEventListener('click', function () {
        playing = playSound(player, playing);
    });


function startTimer(duration, displayMinutes, displaySeconds) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        console.log(1);
        if (timer >= 0) {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            displayMinutes.textContent = minutes;
            displaySeconds.textContent = seconds;

            if (--timer < 0) {
                timer = 0;
            }
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

function playSound(player, playing) {
    if (playing === false) {
        player.play();
        return true;
    } else {
        player.pause();
        return false;
    }
}