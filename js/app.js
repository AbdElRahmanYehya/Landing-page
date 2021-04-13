var sections = document.getElementsByTagName('section');

for(let i = 0; i<sections.length; i++)
{
	document.getElementById("navigation-menu").insertAdjacentHTML('beforeend', '<li id="'+sections[i].id+'-nav" onclick="myFunction(this)" class="nav-item nav-link active">'+sections[i].id+'</li>');
}

function myFunction(element) {
	document.getElementById(element.textContent).scrollIntoView({behavior: "smooth"});
}


document.addEventListener('scroll', function() {
  let max = Number.POSITIVE_INFINITY;
	for(let i = 0; i<sections.length; i++)
	{
		const selectedElement = document.getElementById(sections[i].id);
    	rect = selectedElement.getBoundingClientRect();

	  	if(rect.top < 150 && rect.bottom > 150)
	  		selectedElement.style.cssText = 'text-shadow: black 2px 0px 10px; border-radius: 30px; border: 5px solid white';
	  	else
	  		selectedElement.style.cssText = 'text-shadow: ""; border-radius: ""; border: ""';

	}
});

