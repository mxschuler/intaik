document.addEventListener('DOMContentLoaded', progress);
const progressBar = document.getElementById('progress-bar');
const progressButton = document.getElementById('progress-button');
var progress = 0;
var days = 0;
progressBar.style.height = '0%';

function progress(){
    progressButton.addEventListener('click', () => {
        if (progress <= 100) {
            days += 1
            progress += 14.29;
            progressBar.style.height = progress + '%';
        }
        if (progress >= 100){
            progress = 0;
            days = 0;
            progressBar.style.height = '0%';
            window.open('sticker-book.html');
        }
    });
}


