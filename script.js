let first = document.getElementById( 'first' );
first.addEventListener("click", function (e){
    if(first.classList.contains('showed-all')) {
        e.target.innerHTML = '<img class="showed-all" src="image/readnext.svg" alt=""> Показать все';
        first.classList.remove('showed-all')
    } else {
        e.target.innerHTML = '<img class="img-arrow" src="image/icon.svg" alt="">Скрыть';
        first.classList.add('showed-all')
    }
    function toggleButtonPressed() {
    }
    toggleButtonPressed()
    document.querySelectorAll('.main-hide__item').forEach((container) => {
        if (container.classList.contains('shrank')) {
            container.classList.remove('shrank')
        } else {
            container.classList.add('shrank');
        }
    });
});

let slider = document.querySelector(".swiper-container")
let swiper;
function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile === "false") {
        swiper = new Swiper(slider, {
            direction: 'horizontal',
            loop: true,
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