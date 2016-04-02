function h(){
	document.getElementById("table-bg").style.width = document.getElementById("table").offsetWidth + "px"; 
	document.getElementById("table-bg").style.height = document.getElementById("table").offsetHeight + "px";
	document.getElementById("bg").style.height = document.getElementById("table").offsetHeight*1.2+ "px";  
}

window.onload=function(){
	h();
}
window.onresize=function(){
	h();
}
