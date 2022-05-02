const main_video = document.querySelector('.main_video')
const body_video = document.querySelector('.body_video')
const close = document.querySelector('.close')

main_video.addEventListener('click',function(){
    body_video.classList.add('open_video')
});
