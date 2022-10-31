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
