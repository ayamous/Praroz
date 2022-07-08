var liGroup = document.getElementById("menu").getElementsByTagName("li")
var tireChange = document.getElementById("text")
var btnChange = document.getElementById("zar")
var menu = document.getElementById("menu")
var count = 1;
/*
for (var i = 0; i <liGroup.length; i++) {
	liGroup[i].addEventListener("click",selectItem);
}*/
menu.addEventListener("click", selectItem)
function selectItem(n){
	if(n.target.nodeName == "LI"){
		tireChange.innerHTML  = n.target.innerHTML;
	for (var i = 0; i < liGroup.length ; i++) {
		liGroup[i].classList.remove("selected")
	}
	n.target.classList.add("selected")
	}
	
}

btnChange.addEventListener("click", newItem)

function newItem(){
	menu.innerHTML += "<li>new li " + count + "</li>"
	count++
}