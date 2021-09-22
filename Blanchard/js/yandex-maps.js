let flag = 0;

window.addEventListener('scroll', function () {
	let scrollY = window.scrollY;
	let contactsOffset = document.querySelector('.contacts').offsetTop;
	if ((scrollY >= contactsOffset - 1000) && (flag == 0)) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map("map", {
				center: [55.758747, 37.601187],
				zoom: 15,
				scroll: false,
				controls: [],
			});

			var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
				iconLayout: 'default#image',
				iconImageHref: '../img/label.svg',
				iconImageSize: [30, 42],
				iconImageOffset: [-3, -42]
			});

			myMap.geoObjects.add(myPlacemark); {
				searchControlProvider: 'yandex#search'
			}
		});
		flag = 1;
	}

});
