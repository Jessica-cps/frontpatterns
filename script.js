$( document ).ready(function() {
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setaccordionAria,
	switchaccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);

		setAriaAttr = function(el, ariaType, newProperty){
		  el.setAttribute(ariaType, newProperty);
	   };
	setaccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchaccordion = function(e) {
  if (window.isScrolling) {
    window.isScrolling = false;
    return;
  }
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setaccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setaccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', function() { window.isScrolling = false; }, false);
      accordionToggles[i].addEventListener('touchmove', function() { window.isScrolling = true; }, false);
      accordionToggles[i].addEventListener('touchend', switchaccordion, false);
    }
    accordionToggles[i].addEventListener('click', switchaccordion, false);
  }
});