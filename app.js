
document.getElementById("contact-nav").addEventListener("click", function() {
  document.getElementById("contact").scrollIntoView({behavior: "smooth"});
});

var sections = document.getElementsByTagName('section');
// for(let i = 0; i<sections.length; i++)
// {
// 	const y = document.createElement('p');
// 	y.textContent = "hey yoo";

// 	const x = document.getElementById("navigation-menu");
// 	x.appendChild(y);
// }

for(let i = 0; i<sections.length; i++)
{
	document.getElementById("navigation-menu").insertAdjacentHTML('beforeend', '<button id="'+sections[i].id+'-nav">'+sections[i].id+'</button>');
}