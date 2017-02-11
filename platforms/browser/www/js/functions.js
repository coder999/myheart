function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	vars[key] = value;
	});
	return vars;
}
//var first = getUrlVars()["id"];

//$('#sel option:contains(' + val + ')').prop({selected: true});

function myMD() {
	if (localStorage.getItem('md') != null) {
		alert ('Your MD is ' + localStorage.getItem('md'));
	} else {
		alert ('Your MD is not defined');
		window.location.href="myinfo.html";
	}
	return false;
	
}


$( document ).ready(function() {
	
	
//$('#sel option:contains(' + val + ')').prop({selected: true});
	
	

});