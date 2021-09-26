// Counter 1
(function yearCounter() {
	const observer = new IntersectionObserver(
		function (entries) {
			if (entries[0].isIntersecting === true) {
				const numberOfYears = document.querySelector('.number-of-years');
				let count = 0;

				let counter = setInterval(() => {
					count++;
					numberOfYears.innerText = `${count}`;
					if (count > 99) clearInterval(counter);
				}, 20);
			}
		},
		{ threshold: [1] },
	);
	observer.observe(document.querySelector('.years'));
})();

// Counter 2
(function projectCounter() {
	const observer = new IntersectionObserver(
		function (entries) {
			if (entries[0].isIntersecting === true) {
				const numberOfProjects = document.querySelector('.number-of-projects');
				let count = 1000;

				let counter = setInterval(() => {
					count += 1000;
					numberOfProjects.innerText = `${count + '+'}`;
					if (count > 199000) clearInterval(counter);
				}, 10);
			}
		},
		{ threshold: [1] },
	);

	observer.observe(document.querySelector('.years'));
})();
