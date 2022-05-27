
$(document).foundation();

const ctaVto = document.querySelectorAll('.flip-card');

// const isiPhone = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
const isiPhone = true;

function removeNavClass() {
	for (let i = 0; i < ctaVto.length; i++){
		ctaVto[i].classList.remove('active');
	}
};

function addCustomEventListener() {
	for (let i = 0; i < ctaVto.length; i++){
		ctaVto[i].addEventListener('click', function(e) {
			removeNavClass();
			e.currentTarget.classList.add('active');
		});
	}
};

removeNavClass();
addCustomEventListener();
