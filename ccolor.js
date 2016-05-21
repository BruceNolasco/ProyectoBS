
/*document.getElementById("p1").onclick=(function(){
	less.modifyVars({
		"@bgcol":"#407f7f"
	});
	less.refreshStyle;
});*/
/*
document.getElementById("p2").onclick=(function(){
	less.modifyVars({
		"@bgcol":"#b95c7f"
	});
	less.refreshStyle;
});

document.getElementById("p3").onclick=(function(){
	less.modifyVars({
		"@bgcol":"#d4b56a"
	});
	less.refreshStyle;
});
*/

function changeColor(ider,color){
	document.getElementById(ider).onclick=(function()
	{
		less.modifyVars({
			"@bgcol":color
			});
		less.refreshStyle;
		document.cookie=color;
	});
};
changeColor('p1','#0F5935');
changeColor('p2','#2E4170');
changeColor('p3','#555527');
if (document.cookie !== ""){
	less.modifyVars({
			"@bgcol":document.cookie
			});
	less.refreshStyle;
}
else
{
	less.modifyVars({
			"@bgcol":"#00343F"
			});
	less.refreshStyle;
	document.cookie="#00343F";
}

function audioM(ider){
	document.getElementById(ider).onclick=(function()
	{
		$('.activem').css("display","none");
		document.getElementsByClassName('activem')[0].pause();
		$('.activem').removeClass('activem');
		document.getElementById(ider+'m').play();
		$('#'+ider+'m').css("display","inline").addClass('activem');
	});
};
$('#a1m').addClass('activem');

audioM('a1');
audioM('a2');
audioM('a3');
