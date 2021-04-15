// Building the unordered list dynamically

// Identify the sections that will be used in building the list
const sections = document.getElementsByTagName('section');

// Looping through the sections
for(let i = 0; i<sections.length; i++)
{
	// Adding the unordered list to the navigation menu
	// The unordered list contains id and onclick function that will be used in scrolling to the section and some styling classes
	document.getElementById("navigation-menu").insertAdjacentHTML('beforeend',
																  '<li onclick="myFunction(this)" class="nav-item nav-link active">'+sections[i].id+'</li>');
}


// Scrolling from the navigation menu to the section
function myFunction(element) {
	// gets the section id then scroll to it
	document.getElementById(element.textContent).scrollIntoView({behavior: "smooth"});
}

// Highlight the viewed section while scrolling
document.addEventListener('scroll', function() {

	// Looping through the section list when scrolling
	for(let i = 0; i<sections.length; i++)
	{
		// Identifying the boundaries for each section
		const selectedElement = document.getElementById(sections[i].id);
    	rect = selectedElement.getBoundingClientRect();

    	// if the boundaries are in the viewed section we add styling to highlight this section, else we remove this styling
	  	if(rect.top < 150 && rect.bottom > 150)
	  		selectedElement.style.cssText = 'text-shadow: black 2px 0px 10px; border-radius: 30px; border: 5px solid white';
	  	else
	  		selectedElement.style.cssText = 'text-shadow: ""; border-radius: ""; border: ""';

	}
});

