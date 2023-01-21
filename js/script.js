

// высота экрана в зависимости от экрана + адаптив
function heightHeder () {
  function autoHeight (){
    const backgroundParalax = document.getElementById("background_paralax").clientHeight;
    document.querySelector(".parallax").style.height = backgroundParalax + 'px';
  };
  autoHeight ();
addEventListener("resize", (event) => {
  autoHeight ();
});
}
heightHeder ();

// анимация при скролле
const animItems = document.querySelectorAll('.anim-items')

if (animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(){
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;


			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				let animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('show');
			} else {
				if(!animItem.classList.contains('_anim-no-hide')){
				 animItem.classList.remove('show');
				}
			}
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	const showAnimations = setTimeout(animOnScroll, 300);
	showAnimations;
}

// клик бургер меню  
document.addEventListener("DOMContentLoaded", function(){
	"use strict";
	let theBody = document.querySelector(".header_burger");
  let menu = document.querySelector(".menu");
  let element = document.querySelectorAll('.title-nav_li');
	  function toggleClass() {
        document.body.classList.toggle('lock');
		    theBody.classList.toggle("activ");
        menu.classList.toggle("activ");
        for(let i = 0; i < element.length; i++) {
            element[i].classList.toggle("activ");
          };
       
	};
	document.querySelector(".header_burger").addEventListener("click", toggleClass );
  document.querySelector(".prise_li").addEventListener("click", toggleClass);
  document.querySelector(".reviews_li").addEventListener("click", toggleClass);
});



// // слайдер
// первый
var swiper1 = new Swiper(".mySwiper", {
  loop: false,
  slidesPerView: 3,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    479: {
      spaceBetween: 50,
    }
  },
});
var swiper2 = new Swiper(".mySwiper1", {
  loop: false,
  allowTouchMove: false,
  spaceBetween: 10,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  thumbs: {
    swiper: swiper1,
  },
});


// второй
var swiper11 = new Swiper(".mySwiper3", {
  loop: false,
  slidesPerView: 3,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    479: {
      spaceBetween: 50,
    }
  },

});
var swiper12 = new Swiper(".mySwiper2", {
  loop: false,
  allowTouchMove: false,
  spaceBetween: 10,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  thumbs: {
    swiper: swiper11,
  },
  
});

// третий
var swiper13 = new Swiper(".mySwiper5", {
  loop: false,
  slidesPerView: 3,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    479: {
      spaceBetween: 50,
    }
  },

});
var swiper14 = new Swiper(".mySwiper4", {
  loop: false,
  allowTouchMove: false,
  spaceBetween: 10,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  thumbs: {
    swiper: swiper13,
  },
});


// мои работы слайдер
const swiperPortfolio = new Swiper('.swiper-portfolio', {
  loop: false,
  spaceBetween: 500,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
    // checkInView: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',  
      type: 'fraction',
    },
    
});

// отзывы слайдер
const swiperReviews = new Swiper('.reviews-slider', {
  loop: false,
  spaceBetween: 500,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// слайдер в слайдере

const swiperInSwiper = new Swiper('.slide-in-swiper', {
  spaceBetween: 40,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
    checkInView: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  slidesPerView: 3,
    breakpoints: {
      0: {
        loop: false,
        slidesPerView: 1,
         slidesPerGroup: 1,
         scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },

      },
      940: {
        slidesPerView: 2,
         slidesPerGroup: 2,
      },
      1400: {
        slidesPerView: 3,
         slidesPerGroup: 3,
         loop: false,
         scrollbar: {
          el: '.swiper-scrollbar',
          draggable: false,
        },
      }
    },
});



const parallax = document.querySelector('.parallax');
const content = document.querySelector ('.parallax_container');
// паралакс при скролле
let thresholSets = [];
for (let i = 0; i <= 1.0; i += 0.005) {
    thresholSets.push(i);
}
const callback = function (entries, observer) {
    const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
    setParallaxItemStyle(scrollTopProcent);
};
const observer = new IntersectionObserver(callback, {
    threshold: thresholSets
})
observer.observe(document.querySelector('.content'));

function setParallaxItemStyle(scrollTopProcent) {
    content.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`;
}