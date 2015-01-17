window.onload = function(){
	var query = document.getElementById("query");
	var submit = document.getElementsByClassName("submit-btn")[0];
	var qresult = document.getElementsByClassName("query-results")[0];
	
    // var xmlhttp;

    // if (window.XMLHttpRequest){//IE7+, firefox, chrome, opera, safari
    // 	xmlhttp = new XMLHttpRequest();
    // }else{
    // 	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    // }

    // submit.addEventListener("click", setSrc);

    // function setSrc(){
    
    // 	scriptTag.src = url + "&q=" + query.value.replace(/\s/g, "+");
    // 	result.innerHTML = query.value;
    // }

	query.addEventListener("keypress", function(){

		setTimeout(function(){

			var scriptTag = document.createElement("SCRIPT");
			document.getElementsByTagName('HEAD')[0].appendChild(scriptTag); 

			var url = "http://octopart.com/api/v3/parts/search";
			url += "?apikey=612b8697";
			url += "&callback=logIt";

			qurl =  url + "&q=" + query.value.replace(/\s/g, "+") + "&start=0&limit=20";
			scriptTag.src = qurl;

		}, 0)
	});
}



