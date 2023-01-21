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
});

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
// галлерея



lightGallery(document.getElementById('lightgallery'), {
	plugins: [lgZoom, lgThumbnail],
	licenseKey: 'your_license_key',
	speed: 500,
	thumbnail: false,
	mobileSettings: 'true',
	flipHorizontal: 'true',
	download: 'true',
	subHtmlSelectorRelative: false,
});


// ленивая загрузка


const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const windowHeight = document.documentElement.clientHeight;

// проверка положения массива на странице
let lazyImagesPositions = [];

if (lazyImages.length > 0) {
	lazyImages.forEach(img => {

		if (img.dataset.src || img.dataset.srcset) {
			// вставляем в массив положение каждого изображения
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	});
}
// определение позиции видимого экрана
window.addEventListener("scroll", lazyScroll);
// вызываем lazyScrollCheck если видим обьекты
function lazyScroll() {
	if (document.querySelectorAll('img[data-src], sourse[data-srcset]').length > 0) {
		lazyScrollCheck();
	}
}

// проверка докрутили ли мы до обьекта
function lazyScrollCheck() {
	// ищем индекс в массиве
	let imgIndex = lazyImagesPositions.findIndex(
		// когда обьект появляется присваиваем индекс
		item => pageYOffset > item - windowHeight
		);
	// если нашли
	if (imgIndex >= 0 ) {

		if (lazyImages[imgIndex].dataset.src) {
			// подставляем вместобутофорной картинки, путь к реальной картинке
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			// удаляем бутафорную картинку
			lazyImages[imgIndex].removeAttribute('data-src');

		} else if (lazyImages[imgIndex].dataset.srcset) {
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
	
		}
		// очистить ячейку с позицией данного обьекта
		delete lazyImagesPositions[imgIndex];
	}
}