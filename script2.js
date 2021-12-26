let btn = document.querySelector(".other");
btn.onclick = start;
	let a = 0;


function start() {

var cree = setInterval(ert, 1000);

}

function ert() {


	a = a + 1;
	console.log(a);

	 if (a == 3) {


	 	let text = document.querySelector(".other");

	 	let btn = document.querySelector(".other");
	 	btn.classList.add("aze");
	 	text.innerText = ``;
	 	var alls = document.querySelector("body");
	 	alls.classList.add("hack");

	 	

	 		let audi0 = document.querySelector("audio");
	        audi0.play();

	 }

	 if (a == 200) {

	 	let btn = document.querySelector(".other");
	 	btn.classList.remove("aze");
	 	let a = -70;
	 		 	let text = document.querySelector(".other");
	 	text.innerText = `Ecouter Otherside`;
	 	var alls = document.querySelector("body");
	 	alls.classList.remove("hack");

	 }
}


