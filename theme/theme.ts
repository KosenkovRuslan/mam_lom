setInterval( ()=> {
	document.documentElement.setAttribute(
		'project_lom_theme',
		new Date().getSeconds() < 30 ? 'light' : 'dark',
	)
}, 1000)