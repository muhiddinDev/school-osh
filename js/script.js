const btn=document.querySelector(".about-btn button")
btn.addEventListener("click",() =>{
    document.querySelector(".about-modal").style.
        display="block"
})
const btnClose=document.querySelector(".about-modal-bg-square-close")
btnClose.addEventListener("click",() => {
    document.querySelector(".about-modal").style.
        display = "none"
})



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
swiper();