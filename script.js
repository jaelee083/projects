
var music = new Audio('m.mp3');
var play = false;

function p()
{
    var text = document.getElementById('c');

    if (play)
    {
        music.pause();
        text.style.color = 'white';
    } 
    
    else
    {
        music.loop = true;
        music.play();
        text.style.color = '#ffc306';
    }
    
    play = !play;
}