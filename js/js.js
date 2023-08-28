// Menu Burger
const btn = document.querySelector('.mobile-btn')
const menu = document.querySelector('.mobile-nav')
const mBtn = document.querySelector('.mobile-menu-btn')
const blackout = document.querySelector('.blackout')
const links = document.querySelectorAll('.m-link')

btn.addEventListener('click', () => {
    menu.classList.add('active')
    blackout.classList.add('active')
    document.body.classList.add('active')
})

mBtn.addEventListener('click', () => {
    menu.classList.remove('active')
    blackout.classList.remove('active')
    document.body.classList.remove('active')
})

links.forEach((e) => {
    e.addEventListener('click', () => {
        menu.classList.remove('active')
        blackout.classList.remove('active')
        document.body.classList.remove('active')
    })
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('blackout')) {
        menu.classList.remove('active')
        blackout.classList.remove('active')
        document.body.classList.remove('active')
    }
})

// Swiper
var swiper = new Swiper(".feedbackSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        360: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 0,
        },

    },
});


var swiper = new Swiper(".buildforSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});

var swiper = new Swiper(".technologiesSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

var swiper = new Swiper(".stepsSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        360: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        390: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});