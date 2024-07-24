
function popMenu(inval, insubmit){
	htmlVal = "";
	if (inval == "metric"){
		htmlVal = htmlVal + "<li><a href=\"#\" onclick=\"return popMenu('standard',1);\">US Units</a></li> <li id='menuon'><a href=\"#\" onclick=\"return popMenu('metric',1);\">Metric Units</a></li> <li><a href=\"#\" onclick=\"return popMenu('other',0);\">Other Units</a></li>";
		document.getElementById("ctype").value="metric";
		document.getElementById("standardheightweight").style.display = 'none';
		document.getElementById("metricheightweight").style.display = 'block';
		htmlVal = "<ul>" + htmlVal + "</ul>";
		document.getElementById("ucframe").innerHTML ="";
		if (insubmit==1) document.calform.submit();
	}else if (inval == "standard"){
		htmlVal = htmlVal + "<li id='menuon'><a href=\"#\" onclick=\"return popMenu('standard',1);\">US Units</a></li> <li><a href=\"#\" onclick=\"return popMenu('metric',1);\">Metric Units</a></li> <li><a href=\"#\" onclick=\"return popMenu('other',0);\">Other Units</a></li>";
		document.getElementById("ctype").value="standard";
		document.getElementById("standardheightweight").style.display = 'block';
		document.getElementById("metricheightweight").style.display = 'none';
		htmlVal = "<ul>" + htmlVal + "</ul>";
		document.getElementById("ucframe").innerHTML ="";
		if (insubmit==1) document.calform.submit();
	}else{
		htmlVal = document.getElementById("topmenu").innerHTML ;
		document.getElementById("ucframe").innerHTML = "<iframe src=\"/converter/converter.php?type=\" style=\"overflow:hidden;width:100%\" width=\"100%\" height=\"238\" frameborder=\"NO\" scrolling=\"NO\" allowTransparency=\"true\" ></IFRAME>";
	}
	document.getElementById("topmenu").innerHTML = htmlVal;
	return false;
}
popMenu("metric",0);