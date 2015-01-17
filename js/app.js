window.onload = function(){
	var query = document.getElementById("query");

	query.addEventListener("keypress", function(){

		setTimeout(function(){

			var scriptTag = document.createElement("SCRIPT");
			document.getElementsByTagName('HEAD')[0].appendChild(scriptTag); 

			var url = "http://octopart.com/api/v3/parts/search";
			url += "?apikey=612b8697";
			url += "&callback=logIt";

			qurl =  url + "&q=" + query.value.replace(/\s/g, "+") + "&start=0&limit=10";
			scriptTag.src = qurl;

		}, 0)
	});
}



