import React, { Component } from 'react';

export function setMinHeight(){
	const navHeight = document.querySelector('nav').offsetHeight;
	const appPage = document.querySelector('.page-wrapper');
	console.log(appPage);
	if(!appPage) return;
	appPage.style.minHeight = window.innerHeight - navHeight + 'px';
}


