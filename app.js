const initSlider =()=>{
    const iconicList = document.querySelector(".iconic__items")
    const btnIconic = document.querySelectorAll(".iconic-item .btn-icon")
    

    btnIconic.forEach(button =>{
        button.addEventListener("click",()=>{
            const direction = button.id === "iconic__left" ? -1 : 1;
            const scrollAmount = iconicList.clientWidth * direction;
            iconicList.scrollBy({left: scrollAmount, behavior: "smooth"});

        })
    })
}

window.addEventListener("load", initSlider)

