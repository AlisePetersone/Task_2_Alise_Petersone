function playPause() {
	let myVideo = document.getElementById("video");
	let button = document.getElementById("play-btn");
	if (myVideo.paused) {
		button.style.display = "none";
		myVideo.play();
	}
	else {
		button.style.display = "inline";
		myVideo.pause();
	}
}

function check(){
	let div = document.getElementById("checkbox");
	let checkbox = document.getElementById("accept");
		if (checkbox.checked === false) {
			div.style.backgroundColor = "#E7E7E7";
		} else {
			div.style.backgroundColor = "#FFA800";
		}
}