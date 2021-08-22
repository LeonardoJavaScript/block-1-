const list = document.querySelector(".list");
const button = document.querySelector('.container__button-showMore');
button.addEventListener('click', function () {
    list.classList.toggle("list");
    button.classList.toggle("container__button-showMore_active");
    if (button.classList.contains("container__button-showMore_active")) {
        button.textContent = "Скрыть"
    } else button.textContent = "Показать все"
});
const slider = document.querySelector(".swiper-container")
let swiper;
function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile === "false") {
        swiper = new Swiper(slider, {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        slider.dataset.mobile = "true";
    }

    if (window.innerWidth > 767) {
        slider.dataset.mobile = "false";

        if (slider.classList.contains("swiper-container-initialized")) {
            swiper.destroy();
        }

    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});