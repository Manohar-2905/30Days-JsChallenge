window.addEventListener('keydown',function(event){
    const audio=document.querySelector(`audio[data-key="${event.keyCode}" ]`);
    const key=this.document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    
    key.classList.add("playing");
    this.setTimeout(()=>{
        key.classList.remove('playing')
    },100)
});
