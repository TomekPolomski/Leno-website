document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.querySelector('.navbar__mobile-menu-toggle');
	const navbarMobileMenu = document.querySelector('.navbar__mobile-menu-items');
	const mobileMenuItems = [...document.querySelectorAll('.navbar__mobile-menu-item')];
	const modal = document.querySelector('#videoModal');
	const videoModalBtn = document.querySelector('.preview__video-play-button');
	const closeModalBtn = document.querySelector('.modal__close-button');
	const videoPlayer = document.querySelector('#videoPlayer');

	// Mobile menu
	mobileMenuItems.forEach(item => {
		item.addEventListener('click', () => {
			navbarMobileMenu.classList.remove('active');
		});
	});

	toggleBtn.addEventListener('click', () => {
		navbarMobileMenu.classList.toggle('active');
	});

	// Video Modal

	// Open modal when clicked
	videoModalBtn.addEventListener('click', () => {
		modal.classList.add('open');
	});

	// Replace the src attribute with the video URL
	videoPlayer.src = './img/video.mp4';

	// Close modal on close button click
	closeModalBtn.addEventListener('click', () => {
		modal.classList.remove('open');
	});

	// Close modal on outter click
	window.addEventListener('click', e => {
		if (e.target === modal) modal.classList.remove('open');
	});
});

//  Navigation background on scroll
window.addEventListener('scroll', () => {
	const navbar = document.querySelector('.navbar');

	window.scrollY > 0 ? navbar.classList.add('navbar--scroll') : navbar.classList.remove('navbar--scroll');
});
