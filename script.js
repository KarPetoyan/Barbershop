//Burger
const burger = document.querySelector(".burger")
const burgerLine1 = document.querySelector(".burger_line1")
const burgerLine2 = document.querySelector(".burger_line2")
const burgerLine3 = document.querySelector(".burger_line3")
const burgerMenu = document.querySelector(".burger_menu")
const li  = document.querySelectorAll(".header_li")

burger.addEventListener("click", ()=>{
    burgerLine1.classList.toggle("burger_line1-js")
    burgerLine2.classList.toggle("burger_line2-js")
    burgerLine3.classList.toggle("burger_line3-js")
    burgerMenu.classList.toggle("burger_menu-js")
})

li.forEach((item)=>{
    item.addEventListener("click", ()=>{
        burgerLine1.classList.remove("burger_line1-js")
        burgerLine2.classList.remove("burger_line2-js")
        burgerLine3.classList.remove("burger_line3-js")
        burgerMenu.classList.remove("burger_menu-js")
    })
})


//Haircut
const left = document.querySelector(".fa-arrow-left")
const right = document.querySelector(".fa-arrow-right")
const haircutTextDiv = document.querySelector(".haircut_text_div")
const haircutText = document.querySelector(".haircut_text")

right.addEventListener("click", ()=>{
    haircutTextDiv.scrollBy(haircutText.clientWidth,0)
})

left.addEventListener("click", ()=>{
    haircutTextDiv.scrollBy(-haircutText.clientWidth,0)
})

//Masters
const masterLeft = document.querySelector(".master_left")
const masterRight = document.querySelector(".master_right")
const masterSlide = document.querySelector(".masters_div")
const masterBox = document.querySelector(".master_div")

masterRight.addEventListener("click", ()=>{
    masterSlide.scrollBy(masterBox.clientWidth, 0)
})

masterLeft.addEventListener("click", ()=>{
    masterSlide.scrollBy(-masterBox.clientWidth, 0)
})