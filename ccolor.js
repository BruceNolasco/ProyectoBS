
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
changeColor('p1','#00343F');
changeColor('p2','#2E4170');
changeColor('p3','#555527');
if (typeof document.cookie !== 'undefined'){
	less.modifyVars({
			"@bgcol":document.cookie
			});
	less.refreshStyle;
}
