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
	document.getElementById("navigation-menu").insertAdjacentHTML('beforeend', '<li id="'+sections[i].id+'-nav" onclick="myFunction(this)" class="nav-item nav-link active">'+sections[i].id+'</li>');
}


document.getElementById("contact-nav").addEventListener("click", function() {
  document.getElementById("contact").scrollIntoView({behavior: "smooth"});
});

function myFunction(element) {
	document.getElementById(element.textContent).scrollIntoView({behavior: "smooth"});
}


// var rect = document.getElementById('about').getBoundingClientRect();
// console.log(rect.top);

document.addEventListener('scroll', function() {
  // lastKnownScrollPosition = window.scrollY;

  // console.log(lastKnownScrollPosition);
  let max = Number.POSITIVE_INFINITY;
	for(let i = 0; i<sections.length; i++)
	{
    	rect = document.getElementById(sections[i].id).getBoundingClientRect();

	  	if(rect.top < 150 && rect.bottom > 150)
	  	{
	  		document.getElementById(sections[i].id).style.textShadow = "black 2px 0px 10px";
	  		document.getElementById(sections[i].id).style.borderRadius = "30px";
	  		document.getElementById(sections[i].id).style.border = "5px solid white";
	  	}
	  	else
	  	{
	  		document.getElementById(sections[i].id).style.removeProperty("background-color");
	  		document.getElementById(sections[i].id).style.removeProperty("text-shadow");
	  		document.getElementById(sections[i].id).style.removeProperty("border-radius");
	  		document.getElementById(sections[i].id).style.removeProperty("border");
	  	}
	}

});

