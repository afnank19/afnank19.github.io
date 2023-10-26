const trailer = document.getElementById("trailer");

window.addEventListener("mousemove", function(e){
    const x = e.clientX-trailer.offsetWidth/2;
    const y = e.clientY-trailer.offsetHeight/2;

    trailer.animate({
        left: `${x}px`,
        top: `${y}px`
    },{duration: 1200, fill: "forwards"});
})
window.addEventListener("touchstart",function(e){
    trailer.style.opacity = 0;
})