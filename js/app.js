window.onload = () => {
    // window.addEventListener('resize', initSwiper)
    //     // let swiperFlag = true;
    //     // let sliderMainOne = null;

    // function initSwiper() {

    //     console.log(window.innerWidth)
    //     if (window.innerWidth < 600) {

    //         console.log('123')
    //             // swiperFlag = false;
    //         if (sliderMainOne) {
    //             sliderMainOne.forEach(slider => {
    //                 slider.destroy(true, false);
    //                 slider = null;
    //             })
    //         }
    //         console.log(sliderMainOne)

    //         let container = document.querySelectorAll('.slider__items-1');
    //         container.forEach(slider => {
    //             slider.classList.remove('swiper');
    //             slider.querySelector('.slider__wrapper').classList.remove('swiper-wrapper');
    //             slider.querySelector('.slider__wrapper').classList.remove('swiper-backface-hidden');
    //             slider.querySelectorAll('.slider__item').forEach(item => item.classList.remove('swiper-slide'))
    //             slider.querySelectorAll('.slider__item-img').forEach(item => item.setAttribute('style', ' '))
    //         });
    //     } else if (window.innerWidth > 599) {
    //         // swiperFlag = true;

    //         let sliderMainOne = new Swiper('.slider__items-1', {
    //             freeMode: true,
    //             mousewheel: true,
    //             centeredSlides: true,
    //             slidesPerView: 1,
    //             spaceBetween: 300,
    //             parallax: true,
    //             touchRatio: 0,
    //             allowTouchMove: false,
    //             scrollBar: {
    //                 draggable: false,
    //             },
    //             breakpoints: {
    //                 1450: {
    //                     spaceBetween: 300,
    //                 },
    //                 768: {
    //                     spaceBetween: 200,
    //                 },
    //                 0: {
    //                     spaceBetween: 100,
    //                 }
    //             }
    //         })
    //         console.log(sliderMainOne)
    //     }
    // }

    // initSwiper();


    let newSwiper = undefined;
    window.addEventListener('resize', initSlider);

    function initSlider() {
        if (window.innerWidth > 600 && newSwiper === undefined) {
            newSwiper = new Swiper('.slider__items-1', {
                freeMode: true,
                mousewheel: true,
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 300,
                parallax: true,
                touchRatio: 0,
                allowTouchMove: false,
                init: true,
                scrollBar: {
                    draggable: false,
                },
                breakpoints: {
                    1450: {
                        spaceBetween: 300,
                    },
                    768: {
                        spaceBetween: 200,
                    },
                    0: {
                        spaceBetween: 100,
                    }
                }
            });
        } else if (window.innerWidth < 600 && newSwiper != undefined) {
            newSwiper.forEach(item => {
                item.destroy();
            });
            let container = document.querySelectorAll('.slider__items-1');
            container.forEach(slider => {
                slider.querySelectorAll('.slider__item-img').forEach(item => item.setAttribute('style', ' '))
            });
            newSwiper = undefined;
        }
    }

    initSlider();


    let sliderSection = document.querySelector('.slider');


    if (sliderSection) {
        sliderSection.addEventListener('wheel', e => {
            const target = e.target;
            if (target.classList.contains('slider__content') || target.closest('.slider__content')) {
                let progressBarLine = target.closest('.slider__content').querySelector('.progress-line');
                let progressSlider = parseInt((target.closest('.slider__content').querySelector('.slider__wrapper').style.transform.split(/\w+\(|\);?/)[1].split(',')[0]));
                let slides = target.closest('.slider__content').querySelector('.slider__items').querySelectorAll('.slider__item');
                let widthSlider = 0;
                slides.forEach(slide => {
                    widthSlider += parseInt(slide.offsetWidth)
                });
                progressBarLine.style.transform = `translateX(${Math.round(100 * (Math.abs(progressSlider / widthSlider)))}px)`;
            }
        })
    }
}




document.addEventListener('DOMContentLoaded', () => {
    let prisonCards = document.querySelectorAll('.prison__item');
    let prisonParent = document.querySelector('.prison__items');
    if (prisonCards) {
        prisonCards.forEach(card => {
            card.addEventListener('mouseover', () => {
                let src = card.getAttribute('data-src');
                prisonParent.animate([{ opacity: .80 }, { opacity: 1 }], { duration: 300 })
                prisonParent.style.backgroundImage = `url(${src})`;
                // console.log(src)
            })
        })
    }
    // tabs main
    let mainSlider = document.querySelector('.slider');

    function tabsMain() {
        let descParentTabs = document.querySelector('.slider__nav')
        let btn = document.querySelectorAll('.slider__nav-tab');
        let block = document.querySelectorAll('.slider__content');
        btn.forEach((key, index) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                    item.animate([{ opacity: 0 }, { opacity: 1, }], { duration: 300 })
                });
            });
        });
        descParentTabs.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('slider__nav-tab')) {
                btn.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        });
    }
    if (mainSlider) {
        tabsMain();
    }
    // Burger menu
    let burger = document.querySelector('.header__menu');
    let menu = document.querySelector('.header__nav');
    if (burger) {
        burger.addEventListener('click', () => {
                console.log('123')
                burger.classList.toggle('active');
                menu.classList.toggle('active')
            })
            // window.addEventListener('scroll', () => {
            //     if (menu.classList.contains('active')) {
            //         burger.classList.remove('active');
            //         menu.classList.remove('active');
            //     }
            // })
        document.addEventListener('click', e => {
            const target = e.target;
            if (!target.closest('.header__menu') && !target.closest('.header__nav-list')) {
                menu.classList.remove('active');
                burger.classList.remove('active');
            }
        })
    }
    // lang 
    let langDownBtn = document.querySelector('.lang-down_active');
    let langDownBlock = document.querySelector('.header__lang-other');
    if (langDownBtn) {
        langDownBtn.addEventListener('click', () => {
            langDownBlock.classList.toggle('active');
        })
    }
})