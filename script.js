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


document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("touchstart", function () {
        const keyCode = this.getAttribute("data-key");
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();

        this.classList.add("playing");
        setTimeout(() => this.classList.remove("playing"), 100);
    });
});
