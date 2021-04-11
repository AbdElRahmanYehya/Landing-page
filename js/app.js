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
	document.getElementById("navigation-menu").insertAdjacentHTML('beforeend', '<ul id="'+sections[i].id+'-nav" onclick="myFunction(this)">'+sections[i].id+'</ul>');
}


document.getElementById("contact-nav").addEventListener("click", function() {
  document.getElementById("contact").scrollIntoView({behavior: "smooth"});
});

function myFunction(element) {
	document.getElementById(element.textContent).scrollIntoView({behavior: "smooth"});
}

var highlight = document.querySelector("#highlight");

window.addEventListener('scroll', function(e){
    var y = window.scrollY;
    var offset = y % 30;
    highlight.style.marginTop =  - y % 30 + "px";
});