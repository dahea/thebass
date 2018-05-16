export function setMinHeight(){
	const navHeight = document.querySelector('nav').offsetHeight;
	const appPage = document.querySelector('.page-wrapper');
	if(!appPage) return;
	appPage.style.minHeight = window.innerHeight - navHeight + 'px';
}


