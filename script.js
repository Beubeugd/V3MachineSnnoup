let mdp = document.querySelector(".code");
mdp.onclick = start;

function start() {
	let frites = prompt("Entrez mot de passe");
	 if (frites == "[ACCES REFUSER]") {
	 	alert("Mot de passe correct");
	 	alert("Vous allez être rediriger");
	 	setTimeout(test, 5000);
	 } else {
	 	alert("Mot de passe incorrect");
	 }
}





function test() {

	document.location.href="https://youtu.be/-xPR66tcKVQ"; 
}