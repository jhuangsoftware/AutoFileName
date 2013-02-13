function AutoFileName(LoginGuid, SessionKey) {
	$.ajax({
		url: '/cms/PlugIns/AutoFileName/RqlConnector.js',
		dataType: 'script',
		async: false,
		success: function(){}
	});
	
	AutoFileName.prototype.RqlConnectorObj = new RqlConnector(LoginGuid, SessionKey);
	AutoFileName.prototype.RqlConnectorObj.DCOMUrl = '/cms/PlugIns/AutoFileName/rqlaction.asp';
}

AutoFileName.prototype.AssignHeadlineAsFileName = function (PageGuid)
{
	var strRQLXML = '<PAGE action="load" guid="' + PageGuid + '"/>';
	AutoFileName.prototype.RqlConnectorObj.SendRql(strRQLXML, false, function(data){
		var PageFileName = $(data).find('PAGE').attr('name');
		PageFileName = $.trim(PageFileName);
		if(PageFileName == '')
		{
			// parse out headline
			var PageHeadline = $(data).find('PAGE').attr('headline');
			
			// make headline lower case
			PageHeadline = PageHeadline.toLowerCase();
			
			// replace space char with -
			PageHeadline = PageHeadline.replace(/[^a-zA-Z0-9_-]+/g, '-');
			
			AutoFileName.prototype.SaveFileName(PageGuid, PageHeadline);
		}
	});
}

AutoFileName.prototype.SaveFileName = function (PageGuid, FileName)
{
	var strRQLXML = '<PAGE action="save" guid="' + PageGuid + '" name="' + FileName + '"/>';
	AutoFileName.prototype.RqlConnectorObj.SendRql(strRQLXML, false, function(data){
		// saved
	});
}