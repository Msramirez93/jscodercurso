/* este JS es solo para la actualizacion de la fecha y para las ultimas actualizaciones que se encuentran el en footer*/
const yearElement = document.querySelector("#date");
yearElement.innerText = new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

/*last mood*/
function toggleMenu() {
	console.log(document.getElementById("menu").classList);
	document.getElementById("menu").classList.toggle("hide");
}
document.querySelector('#lastmod').textContent = document.lastModified;


