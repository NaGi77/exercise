function h(){
	document.getElementById("table-bg").style.width = document.getElementById("table").offsetWidth + "px"; 
	document.getElementById("table-bg").style.height = document.getElementById("table").offsetHeight + "px";
	document.getElementById("bg").style.height = document.getElementById("table").offsetHeight*1.2+ "px";  
	document.getElementById("news").style.width = document.getElementById("tr1").offsetWidth + "px"; 
}

window.onload=function(){
	h();
}
window.onresize=function(){
	h();
}
