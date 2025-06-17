window.addEventListener('scroll', () => {
	console.log(window.scrollY)
	const header = document.getElementById('site-header')
	const logo = document.getElementById('site-logo')

	if (window.scrollY > 50) {
		header.classList.add('py-2', 'shadow-lg')
		header.classList.remove('py-4')
		logo.classList.add('size-14')
		logo.classList.remove('size-20')
	} else {
		header.classList.add('py-4')
		header.classList.remove('py-2', 'shadow-lg')
		logo.classList.add('size-20')
		logo.classList.remove('size-14')
	}
})
