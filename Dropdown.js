$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "MelbourneNightlife.xml",
		dataType: "xml",
		success: function(xml) {
			var select = $('#mySelection');

			$(xml).find('place').each(function(){
				$(this).find('category').each(function(){
					var value = $(this).text();
					select.append("<option value='"+ value +"'>"+value+"</option>");
				});
			});
			select.children(":first").text("Select Make").attr("selected",true);
		} 
	}); 
}); 