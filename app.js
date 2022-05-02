const main_video = document.querySelector('.main_video')
const style_number = document.querySelector('.style_number')

main_video.addEventListener('click',function(){
    style_number.classList.add('open')
});

const number1 = document.querySelector('.number1')
const number2 = document.querySelector('.number2')
const number3 = document.querySelector('.number3')
const body_video1 = document.querySelector('.body_video1')
const body_video2 = document.querySelector('.body_video2')
const body_video3 = document.querySelector('.body_video3')

number1.addEventListener('click',function(){
    style_number.classList.remove('open')
    body_video1.classList.add('open')
    body_video2.classList.remove('open')
    body_video3.classList.remove('open')
});
number2.addEventListener('click',function(){
    style_number.classList.remove('open')
    body_video2.classList.add('open')
    body_video1.classList.remove('open')
    body_video3.classList.remove('open')
});
number3.addEventListener('click',function(){
    style_number.classList.remove('open')
    body_video3.classList.add('open')
    body_video2.classList.remove('open')
    body_video1.classList.remove('open')
});
