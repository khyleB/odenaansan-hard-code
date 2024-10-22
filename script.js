let triples = document.querySelectorAll('.triple-container');

window.addEventListener('DOMContentLoaded', ( ) => {
	
	setTimeout(( ) => {

		triples.forEach((span, idx) => {
			setTimeout(( ) => {
				span.classList.add('active');
			}, (idx + 1) * 400)
		});

    });
})
