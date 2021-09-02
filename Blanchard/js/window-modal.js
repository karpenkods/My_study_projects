document.addEventListener('DOMContentLoaded', function () {
	const btn = document.querySelectorAll('.open-window');
	const modalOverlay = document.querySelector('.modal');
	const modals = document.querySelectorAll('.gallery__open-window');
	const modalClose = document.querySelector('.window-close');
	const body = document.body;

	btn.forEach((el) => {
		el.addEventListener('click', (e) => {
			let path = e.currentTarget.getAttribute('data-path');
			modals.forEach((el) => {
				el.classList.remove('modal-visible');
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('modal-visible');
			modalOverlay.classList.add('modal-overlay-visible');
			let pagePosition = window.scrollY;
			let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
			body.classList.add('disable-scroll');
			body.dataset.position = pagePosition;
			body.style.top = -pagePosition + 'px';
			document.body.style.paddingRight = paddingOffset;
		});
	});
	
	modalOverlay.addEventListener('click', (e) => {
		if (e.target == modalOverlay || e.target == modalClose) {
			modalOverlay.classList.remove('modal-overlay-visible');
			modals.forEach((el) => {
				el.classList.remove('modal-visible');
			});
			body.removeAttribute('data-position');
			document.body.style.paddingRight = '';
		}
	});
});
