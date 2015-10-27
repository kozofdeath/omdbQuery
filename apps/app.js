var query_number = 0;

$(function() {
	console.log("loaded");
		$("#search-term").submit(function(event) {
			event.preventDefault();
			var searchTerm = $("#query").val();
			$.getJSON("http://omdbapi.com/?s=" + searchTerm + "&r=json", function(data) {
				var myData = data.Search;
			try {
				myData.length
				showData(myData);
				$("#query").val("");
			 } catch(err) {
				$("#failed-searches").append($("<p/>").text(searchTerm));
				alert("No matches!");

			};
		});
	});
});

function showData(data) {

		data.length;
		$("#search-results").prepend($('<hr>')).prepend($('<div/>').attr('id', query_number));
		$.each(data, function(index, obj) {
			console.log(query_number)
			$('#' + query_number).append($("<span/>").html((index + 1) + " : " + obj.Title + "<br>"));
		});
		query_number++
		console.log(data);

};