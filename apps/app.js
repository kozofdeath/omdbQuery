$(function() {
	console.log("loaded");
	$.getJSON("http://omdbapi.com/?s=Star%20Wars&r=json", function(data) {
		var myData = data.Search;
		showData(myData);
		// for (var i = 0; i < myData.length; i++) {
		// 	$("#search-results").append($('<span/>').html("Title: " + myData[i].Title + "<br>"));
	});

});

function showData(data) {
	$.each(data, function(index, obj) {
		$("#search-results").append($("<span/>").html((index + 1) + " : " + obj.Title + "<br>"));
	});
	console.log(data);
};