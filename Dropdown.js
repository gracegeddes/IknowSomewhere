var MasterBarType = [];

$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "MelbourneNightlife.xml",
		dataType: "xml",
		success: function(xml) {
			var select = $('#Category');

			$(xml).find('place').each(function(){
				$(this).find('category').each(function(){
					var value = $(this).text();
					if (jQuery.inArray(value, MasterBarType) == -1){MasterBarType.push(value) };
					//var Set = new Set(MasterBarType);
					console.log(MasterBarType);
				});
			});
			for (var i = MasterBarType.length - 1; i >= 0; i--) {
				select.append("<option value='"+MasterBarType[i]+"'>"+MasterBarType[i]+"</option>");
			};
			select.children(":first").attr("selected",true);
		} 
	}); 
}); 