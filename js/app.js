window.onload = function(){
	var query = document.getElementById("query");
	var result = document.getElementsByClassName("result")[0];
	var qresult = document.getElementsByClassName("query-results")[0];

	var url = "http://octopart.com/api/v3/parts/search";
    url += "?callback=?";
    url += "&apikey=612b8697";

    var xmlhttp;

    if (window.XMLHttpRequest){//IE7+, firefox, chrome, opera, safari
    	xmlhttp = new XMLHttpRequest();
    }else{
    	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

	query.addEventListener("keydown", function(){
		setTimeout(function(){
			query_url = url + "&q=" + query.value
			result.innerHTML = query.value;

			xmlhttp.open("GET", query_url, false );
			xmlhttp.send();

			xmlhttp.onreadystatechange = function(){
				if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
					qresult.innerHTML = xmlhttp.responseText;
				}
			}
		}, 0);
		
	});
}



