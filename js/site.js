// Load jQuery
google.load("jquery", "1.3.2");
// on page load complete
google.setOnLoadCallback(function() {
	var _licosURL = "http://hb.lycos.com/hb.js";
	var _ipAddRess = null;
	$.getScript(_licosURL,
	function()
	{
		$('#info_holder').html("");
		$('<table id="ipinfo_table"></table>').appendTo("#info_holder");
		if(typeof GeoIP != "undefined")
		{
			for(i in GeoIP)
			{
				$('<tr><td>'+i+'</td><td>'+GeoIP[i]+'</td></tr>').appendTo("#ipinfo_table");
			}
		}
	});
});