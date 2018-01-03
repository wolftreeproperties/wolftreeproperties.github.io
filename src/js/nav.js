const investmentsLinks = 
	document.querySelectorAll('.investments-nav-link'),
drawer = document.querySelector('.drawer');

for (let i = 0; i < investmentsLinks.length; ++i) {
	investmentsLinks[i].addEventListener('click', e => {
		e.preventDefault(); 
		closeDrawer().then(() => 
			switchPg(document.querySelector('.home-page'), 
				document.querySelector('.investments-page'), 
				() => {
					document.querySelector('.navbar-brand').classList.add('show-logo');
					document.querySelector('.page-wrapper').style.overflowY = 'auto';
				}
			)
		);	
	});
}

document.querySelector('.nav-logo').addEventListener('click', e => {
	e.preventDefault();
	switchPg(document.querySelector('.investments-page'), 
		document.querySelector('.home-page'),
		() => {
			document.querySelector('.navbar-brand').classList.remove('show-logo');
			const pgWrapper = document.querySelector('.page-wrapper');
			pgWrapper.scrollTop = 0;
			pgWrapper.style.overflowY = 'hidden';
		}
	);
});

const onAnimationComplete = resolve => {
	drawer.removeEventListener('hidden.bs.modal', onAnimationComplete);
	resolve();
}

const closeDrawer = () => {
 	return new Promise((resolve, reject) => {
	  	if (!drawer.classList.contains('show'))
	  		resolve();
	  	else {
	  		drawer.addEventListener('hidden.bs.modal',
        		e => onAnimationComplete(resolve), false);
	  		document.querySelector('.close').click();
	  	}
  });
}

const switchPg = (from, to, callback) => {
	from.classList.remove('page-active');
	from.classList.add('page-inactive');
	to.classList.remove('page-inactive');
	to.classList.add('page-active');
	callback();
}