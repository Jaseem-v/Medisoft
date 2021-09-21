var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 5,
            spaceBetween: 60,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 60,
        }
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});


/////////////////////////////////////
// Testimonial

var swiper1 = new Swiper(".testimonial__swiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor: true,
});



// ------------mobile-menu----//
const openBtn = document.querySelector(".open-btn")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")

function mobileMenu() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
    overlay.classList.toggle("hidden")
    navContact.classList.toggle("hidden")
}

openBtn.addEventListener("click", mobileMenu)
overlay.addEventListener("click", mobileMenu)

// -----xx-------mobile-menu--xx--//

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }


    // function moveUp() {
    //     $(window).on('load', function () {
    //         $('.move-up').css('opacity', 0);
    //         $('.move-up').waypoint(function () {
    //             $('.move-up').addClass('animate');
    //         }, {
    //             offset: '90%'
    //         });
    //     })
    // }


})



/////////////////////////////////////////////////
// aos


AOS.init({ once: true, delay: 150 });


