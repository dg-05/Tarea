function changeBurger(){
	let burgerBar = getElementByClassName("bar");
	let burgerBarAfter = getElementByClassName("bar:before");
	let burgerBarBefore = getElementByClassName("bar:after");
	if (burgerBar.style.transform === "none") {

        burgerBar.style.transform = "rotate(47deg)";
        
        burgerBarAfter.style.transform = "rotate(81deg)";
		burgerBarAfter.style.top = "-10%";        
        
        burgerBarBefore.style.width = "0";
    } else {
        burgerBar.style.display = "none";
    }
}