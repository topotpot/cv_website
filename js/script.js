let my_name=document.querySelector(".my_name")
my_name.addEventListener("click",function(){
    anime({
        targets:my_name,
        duration:1000,
        easing:"linear",
        color:"#ff5921",
    })
})
