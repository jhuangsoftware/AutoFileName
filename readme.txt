============
Installation
============
Unzip content, including the folder within, to AsP/PlugIns

======================================
Using Plugin in Project without Jquery
======================================
Add the following code to foundation

<!IoRangeRedDotMode>
<script type="text/javascript" src="/cms/plugins/AutoFileName/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/cms/plugins/AutoFileName/AutoFileName.js"></script>
<script type="text/javascript">
	var AutoFileNameObj = new AutoFileName('<%inf_loginguid%>', '<%inf_sessionkey%>');
	AutoFileNameObj.AssignHeadlineAsFileName('<%inf_pageguid%>');
</script>
<!/IoRangeRedDotMode>

===================================
Using Plugin in Project with Jquery
===================================
Add the following code to foundation

<!IoRangeRedDotMode>
<script type="text/javascript" src="/cms/plugins/AutoFileName/AutoFileName.js"></script>
<script type="text/javascript">
	var AutoFileNameObj = new AutoFileName('<%inf_loginguid%>', '<%inf_sessionkey%>');
	AutoFileNameObj.AssignHeadlineAsFileName('<%inf_pageguid%>');
</script>
<!/IoRangeRedDotMode>

