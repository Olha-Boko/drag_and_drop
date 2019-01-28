(() => {
	console.log('fired')

	const theButton = document.querySelector("#buttonHolder img");
	
	// window.addEventListener("load", changeHeadline);

	function changeHeadline() {
		document.querySelector("h1").textContent = "Hello thee!";
		document.querySelector('p').textContent = "this is the subhead";
	}

	theButton.addEventListener("click", changeHeadline);
	
})();
