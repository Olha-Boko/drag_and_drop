(() => {

	//set up the pieces on the board
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
//drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");

	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	let dropZones = document.querySelectorAll('.drop-zone');
//drop area
	function createPuzzlePieces(pictureIndex) {
		//debugger;
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" 
			src="images/${piece + pictureIndex}.jpg" alt="puzzle piece" draggable>`;

			piecesBoard.innerHTML += newPuzzlePiece;

		});
		initDrag();
	}
	//drag and drop function
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img =>{
			img.addEventListener("dragstart", function(e) {
				console.log('draggin..');
				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}
	//handle the drop
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e){
			e.preventDefault();
			console.log('draggged over me!');

		});
//no more then 1 piece in one drop area
		function drop(e){
			e.preventDefault();
			let piece = e.dataTransfer.getData('text/plain');
			e.target.appendChild(document.querySelector(`#${piece}`));

		}

		zone.addEventListener("drop", function(e){
			e.preventDefault();
			if(!zone.innerHTML){
				drop(e);
			}
			else {
				console.log('I am not empty')
			}
		});
	});

	function resetPuzzlePieces() {
		//debugger;
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref);
		//check all drop zones and if zone is not empty make it empty
		for(var i = 0; i < dropZones.length; i++){
			dropZones[i].innerHTML = "";
		}
	}
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));
	
	//call this function to set up

	createPuzzlePieces(0);
	
})();
