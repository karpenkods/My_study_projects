	let eventNews = function () {
		let eventsCard = document.querySelectorAll('.events__card'),
			eventsBtn = document.querySelector('.events__btn');


		eventsBtn.addEventListener('click', function () {

			eventsCard.forEach(item => {

				item.style.display = 'block';

				item.style.marginBottom = '30px';

				eventsBtn.style.display = 'none';
			})
		});
	};

	eventNews();
