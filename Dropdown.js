var MasterBarType = [];
var masterOccasion = [];
var masterStyle = [];

$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "MelbourneNightlife.xml",
		dataType: "xml",
		success: function(xml) {
			// getUniqueValue(xml);

			var select = $('#Category');

			$(xml).find('place').each(function(){
				$(this).find('category').each(function(){
					var value = $(this).text();
					if (jQuery.inArray(value, MasterBarType) == -1){MasterBarType.push(value) };
					//var Set = new Set(MasterBarType);
					// console.log(MasterBarType);
				});
			});
			for (var i = MasterBarType.length - 1; i >= 0; i--) {
				select.append("<option value='"+MasterBarType[i]+"'>"+MasterBarType[i]+"</option>");
			};
			select.children(":first").attr("selected",true);

			var select1 = $('#occasion');
			var select2 = $('#style');

			$(xml).find('place').each(function(){
				$(this).find('ambience').each(function(){
						// var length = value.children().length;
					$(this).find('ideal_occasion').each(function(){
						var occasion = $(this).text();
						// console.log(valueAmbience);
						if (jQuery.inArray(occasion, masterOccasion) == -1){masterOccasion.push(occasion)};
						// console.log(masterOccasion);
					});

					$(this).find('style').each(function(){
						var style = $(this).text();
						//console.log(valueAmbience);
						if (jQuery.inArray(style, masterStyle) == -1){masterStyle.push(style)};
						// console.log(masterStyle);
					});
				});
			});

			for (var i = masterOccasion.length - 1; i >= 0; i--) {
				select1.append("<option value='"+masterOccasion[i]+"'>"+masterOccasion[i]+"</option>");
			};
			for (var i = masterStyle.length - 1; i >= 0; i--) {
				select2.append("<option value='"+masterStyle[i]+"'>"+masterStyle[i]+"</option>");
			};




	}
			

	}); 
}); 

function getChildrenValues(value) {


}