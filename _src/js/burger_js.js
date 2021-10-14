// "use strict"
// //===== Определяет с какой ОС зашли на сайт =====================================================//
// const isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.iOS() ||
// 			isMobile.Opera() ||
// 			isMobile.Windows());
// 	}
// };
//===============================================================================================//

//===============================================================================================//
// if (isMobile.any()) {
// 	document.body.classList.add('_touch'); //добавляет данный класс для body если определил сенсорный экран

// 	let menuArrows = document.querySelectorAll('.top-header__arrow'); //собираем в переменную все объекты с классом .menu__arrow (стрелочки)
// 	if (menuArrows.length > 0) { //проверяем есть ли такие объекты
// 		for (let index = 0; index < menuArrows.length; index++) { //если есть, запускаем цикл, чтобы пройтись по всем
// 			const menuArrow = menuArrows[index]; //создаем константу с каждой стрелочкой
// 			menuArrow.addEventListener("click", function (e) { //навешиваем событие клик
// 				menuArrow.parentElement.classList.toggle('_active'); //добавляем класс родителю нажатой стрелочки при клике.
// 			});
// 		}
// 	}
// } else {
// 	document.body.classList.add('_pc'); //добавляет класс для body если не определил сенсорный экран
// 	let menuArrows = document.querySelectorAll('.top-header__arrow'); //собираем в переменную все объекты с классом .menu__arrow (стрелочки)
// 	if (menuArrows.length > 0) { //проверяем есть ли такие объекты
// 		for (let index = 0; index < menuArrows.length; index++) { //если есть, запускаем цикл, чтобы пройтись по всем
// 			const menuArrow = menuArrows[index]; //создаем константу с каждой стрелочкой
// 			menuArrow.addEventListener("click", function (e) { //навешиваем событие клик
// 				menuArrow.parentElement.classList.toggle('_active'); //добавляем класс родителю нажатой стрелочки при клике.
// 			});
// 		}
// 	}
// }
//===============================================================================================//
//=====  ==============================================================================//
const profileLink = document.querySelector('.top-header__item_p');
let menuArrows = document.querySelector('.top-header__arrow');
if (profileLink) { //проверяем есть ли такой класс
	profileLink.addEventListener("click", function (e) { //вешаем на иконку событие клик
		profileLink.classList.toggle('_active');//ставим и убираем класс _active на иконку бургера каждый раз при клике (для навешивания анимаций при клике на иконку бургера)
		menuArrows.classList.toggle('_active');//ставим и убираем класс _active на menu__body каждый раз при клике (для выезда меню при открытии бургера)
	});
}
//===============================================================================================//

//===== Открытие и закрытие меню бургера ========================================================//
const iconMenu = document.querySelector('.menu__icon'); //ищем класс и добавляем его в константу
if (iconMenu) { //проверяем есть ли такой класс
	const menuBody = document.querySelector('.menu__body'); //получаем еще один класс в константу
	iconMenu.addEventListener("click", function (e) { //вешаем на иконку событие клик
		document.body.classList.toggle('_lock'); //ставим и убираем класс _lock на body каждый раз при клике (для запрета скролла сайта при открытом меню бургер)
		iconMenu.classList.toggle('_active');//ставим и убираем класс _active на иконку бургера каждый раз при клике (для навешивания анимаций при клике на иконку бургера)
		menuBody.classList.toggle('_active');//ставим и убираем класс _active на menu__body каждый раз при клике (для выезда меню при открытии бургера)
	});
}
//===============================================================================================//

//===== Открытие и закрытие поиска ==============================================================================//
let searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.main-header__input');
const searchBtn = document.querySelector('.main-header__btn');
if (searchIcon) {
	iconSearch.addEventListener("click", function (e) { //вешаем на иконку событие клик
		iconSearch.classList.add('_hide'); //ставим и убираем класс _lock на body каждый раз при клике (для запрета скролла сайта при открытом меню бургер)
		searchInput.classList.toggle('_active');//ставим и убираем класс _active на иконку бургера каждый раз при клике (для навешивания анимаций при клике на иконку бургера)
		searchBtn.classList.toggle('_active');//ставим и убираем класс _active на menu__body каждый раз при клике (для выезда меню при открытии бургера)
	});
}
//===============================================================================================//

//===== Плавная прокрутка к контенту из меню ====================================================//
const menuLinks = document.querySelectorAll('.menu__link[data-goto]'); //собираем массив объектов которые будут учавствовать в навигации. (объекты с атрибутом data-goto)
if (menuLinks.length > 0) {//проверяет есть ли такие объекты
	menuLinks.forEach(menuLink => { //если есть, запускает цикл, чтобы пройтись по всем
		menuLink.addEventListener("click", onMenuLinkClick); //вешаем событие клик и сразу задаем функцию
	});
	function onMenuLinkClick(e) {//создаем функцию
		const menuLink = e.target; //получаем объект на который мы кликаем
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) { //условие которое проверяет заполнен ли атрибут у объекта, и существует ли объект на который ссылаются
			const gotoBlock = document.querySelector(menuLink.dataset.goto); //получаем в константу сам объект, на который ссылаемся
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight; //высчитываем положение объекта,на который ссылаемся (с учетом высоты шапки)

			if (iconMenu.classList.contains('_active')) {//проверяем содержит ли иконка бургера класс _active (т.е. меню открыто)
				document.body.classList.remove('_lock'); //ставим и убираем класс _lock на body каждый раз при клике (для запрета скролла сайта при открытом меню бургер)
				iconMenu.classList.remove('_active');//ставим и убираем класс _active на иконку бургера каждый раз при клике (для навешивания анимаций при клике на иконку бургера)
				menuBody.classList.remove('_active');//ставим и убираем класс _active на menu__body каждый раз при клике (для выезда меню при открытии бургера)
			}

			//далее скрипт который прокручивает страницу
			window.scrollTo({ //обращаемся к окну браузера и указываем функцию которая делает прокрутку.
				top: gotoBlockValue, //указывает откуда прокручивать и до какого объекта.
				behavior: "smooth" //делает прокрутку плавной
			});
			e.preventDefault(); //отключает работу ссылки, чтоб она не переходила по href.
		}
	}
}
//===============================================================================================//

//=====  ==============================================================================//
$(document).on('click touchstart', function (e) {
	if (!$(e.target).is(".top-header__item_p *")) {
		$('.top-header__item_p').removeClass('_active');
		$('.top-header__arrow').removeClass('_active');
	};
});
//===============================================================================================//