var date = new Date;
var hour =Number(date.getHours());
const changeDOM = document.getElementById('back');
function night_background(){
    changeDOM.style.backgroundImage = 'url("/img/night_img.jpg")';
    changeDOM.style.backgroundSize ="150%";
}
function morning_background(){
    changeDOM.style.backgroundImage = 'url("/img/morning.jpg")';
    changeDOM.style.backgroundSize ="150%";
}
function day_background(){
    changeDOM.style.backgroundImage = 'url("/img/img2.jpg")';
    changeDOM.style.backgroundSize ="150%";
}
function evening_background(){
    changeDOM.style.backgroundImage = 'url("/img/pic.jpeg")';
    changeDOM.style.backgroundSize ="150%";
}
if (hour > -1 && hour<5){
    night_background();
}
else if (hour>4 && hour<13){
    morning_background();
}
else if (hour>17 && hour<24){
    evening_background();
}
else{
    day_background();
}

