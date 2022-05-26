
$(document).foundation();

const ctaVto = document.querySelectorAll('.flip-card');

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
