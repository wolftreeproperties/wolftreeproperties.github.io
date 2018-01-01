document.querySelector('#investments-nav-link').addEventListener('click', e => {
	e.preventDefault();
	switchPg(document.querySelector('.home-page'), 
		document.querySelector('.investments-page'), 
		() => document.querySelector('.navbar-brand').classList.add('show-logo')
	);	
});

document.querySelector('.nav-logo').addEventListener('click', e => {
	e.preventDefault();
	switchPg(document.querySelector('.investments-page'), 
		document.querySelector('.home-page'),
		() => document.querySelector('.navbar-brand').classList.remove('show-logo')
	);
});

let switchPg = (from, to, callback) => {
	from.classList.remove('page-active');
	from.classList.add('page-inactive');
	to.classList.remove('page-inactive');
	to.classList.add('page-active');
	callback();
}