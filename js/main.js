// Slide-In effect
(function slideIn() {
	const slideIns = document.querySelectorAll('.js-slidein');

	window.addEventListener('scroll', slideIn);

	slideIns.forEach((element) => {
		const triggerBottom = window.innerHeight / 1.1;
		const elementTop = element.getBoundingClientRect().top;

		if (triggerBottom > elementTop) {
			element.classList.add('show');
		} else {
			element.classList.remove('show');
		}
	});
})();

// Remove slideIn from #showcase & #quote on desktop
(function removeSlideIn() {
	if (window.innerHeight > 900) {
		const infoBoxes = document.querySelectorAll('.info-box'),
			quoteLinks = document.querySelectorAll('.quote-link');

		infoBoxes.forEach((box) => {
			box.classList.remove('js-slidein');
		});
		quoteLinks.forEach((link) => {
			link.classList.remove('js-slidein');
		});
	}
})();

// Shrink header on scroll
(function shrinkHeader() {
	const header = document.querySelector('#header'),
		logo = document.querySelector('.logo-img'),
		menu = document.querySelector('.menu');

	window.addEventListener('scroll', shrinkHeader);

	if (window.innerWidth < 1024) {
		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			header.style.borderBottom = '1px solid rgba(75, 75, 75, 0.2)';
			logo.style.width = '5rem';
			menu.style.top = '3.9rem';
			menu.style.height = 'calc(100vh - 4rem)';
		} else {
			header.style.borderBottom = 'none';
			logo.style.width = '7rem';
			menu.style.top = '4.93rem';
		}
	} else if (window.innerWidth > 1023) {
		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			header.style.borderBottom = '1px solid rgba(75, 75, 75, 0.2)';
			logo.style.width = '7rem';
		} else {
			header.style.borderBottom = 'none';
			logo.style.width = '9rem';
		}
	}
})();

// Hamburger menu
(function hamburgerMenu() {
	if (window.innerWidth < 1024) {
		const hamburger = document.querySelector('.hamburger'),
			menu = document.querySelector('.menu'),
			menuIcon = document.querySelector('#menu-icon'),
			body = document.querySelector('body');

		hamburger.addEventListener('click', () => {
			if (menu.style.display === 'none' || menu.style.display === '') {
				setTimeout(() => {
					menu.style.display = 'flex';
					menu.style.flexFlow = 'column nowrap';
					menu.style.justifyContent = 'center';
					menu.style.alignItems = 'center';
					menu.style.animation = 'slideIn 400ms ease-in';
				}, 1);

				menuIcon.classList.remove('icon-menu');
				menuIcon.classList.add('icon-x');
				body.style.overflow = 'hidden';
			} else {
				slideOut();
			}
		});

		// Hide menu after clicking on anchored menu-item
		const menuLinks = document.querySelectorAll('.menu-link');

		menuLinks.forEach((link) => {
			link.addEventListener('click', () => {
				slideOut();
			});
		});

		// Outside click
		menu.addEventListener('click', () => {
			slideOut();
		});

		function slideOut() {
			menu.style.animation = 'slideOut 350ms ease-in';
			setTimeout(() => {
				menu.style.display = 'none';
			}, 300);

			menuIcon.classList.remove('icon-x');
			menuIcon.classList.add('icon-menu');
			body.style.overflow = 'auto';
		}
	}
})();

// Merging #contact with #locations
(function mergeContactSection() {
	if (window.innerWidth > 1023) {
		const contact = document.querySelector('#contact'),
			locations = document.querySelector('#locations'),
			footer = document.querySelector('#footer'),
			contactDetails = document.createElement('section');

		contactDetails.setAttribute('id', 'contact-details');
		footer.parentNode.insertBefore(contactDetails, footer);

		contactDetails.appendChild(contact);
		contactDetails.appendChild(locations);
	}
})();

// Textarea auto resize
(function autoResize() {
	const textArea = document.querySelector('[data-autoresize]'),
		offset = textArea.offsetHeight - textArea.clientHeight;

	textArea.addEventListener('input', (e) => {
		e.target.style.height = 'auto';
		e.target.style.height = e.target.scrollHeight + offset + 'px';
	});
})();

// Date
(function getCurrentDate() {
	const currentYear = document.querySelector('#currentYear');
	currentYear.innerText = new Date().getFullYear();
})();
