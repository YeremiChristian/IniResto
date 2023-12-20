// slider
let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;
const cardWidth = document.querySelector('.card').offsetWidth;
const sliderWrapper = document.getElementById('sliderWrapper');
const autoplayDelay = 4000;

function changeSlide(direction) {
	currentIndex = (currentIndex + direction + totalCards) % totalCards;
	const newTransformValue = -currentIndex * cardWidth;
	sliderWrapper.style.transform = `translateX(${newTransformValue}px)`;
}

let autoplayInterval;

function startAutoplay() {
	autoplayInterval = setInterval(() => {
		changeSlide(1);
	}, autoplayDelay);
}

function stopAutoplay() {
	clearInterval(autoplayInterval);
}

sliderWrapper.addEventListener('mouseover', stopAutoplay);
sliderWrapper.addEventListener('mouseout', startAutoplay);

startAutoplay();

let currentIndex2 = 0;
const totalCards2 = document.querySelectorAll('.card2').length;
const cardWidth2 = document.querySelector('.card2').offsetWidth;
const sliderWrapper2 = document.getElementById('sliderWrapper2');
const autoplayDelay2 = 1000; // Ubah sesuai kebutuhan (dalam milidetik)

function changeSlide2(direction) {
	currentIndex2 = (currentIndex2 + direction + totalCards2) % totalCards2;
	const newTransformValue2 = -currentIndex2 * cardWidth2;
	sliderWrapper2.style.transform = `translateX(${newTransformValue2}px)`;
}

// Menampilkan menu Makanan Berat secara default
showMenu('MakananBerat');

function showMenu(category) {
	// Hide all menu grids
	var menuGrids = document.querySelectorAll('.menu_daftar_menu_grid');
	menuGrids.forEach(function (grid) {
		grid.classList.remove('active');
	});

	// Show the selected menu grid
	var selectedMenuGrid = document.getElementById(category);
	if (selectedMenuGrid) {
		selectedMenuGrid.classList.add('active');
	}
}

// Toggle class active untuk hamburger menu
const navbar = document.querySelector('.navbar');
// ketika hamburger menu di klik
document.querySelector('#hamburger').onclick = () => {
	navbar.classList.toggle('active2');
};

const hm = document.querySelector('#hamburger');

document.addEventListener('click', function (e) {
	if (!hm.contains(e.target) && !navbar.contains(e.target)) {
		navbar.classList.remove('active2');
	}
});

