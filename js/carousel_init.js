// Project-slider initialization
const containerId = 'slider-1';

const options = {
	transitionTime: 500,
	transitionZoom: 'in',
	bullets: true,
	bulletColor: 'var(--blue-color)',
	arrows: true,
	arrowsHide: true,
	auto: true,
	autoTime: 4000,
};

const slider = createSlider(containerId, options);
