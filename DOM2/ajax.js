function loadpage(file)
{
	var xmlHttp;
	if(window.XMLHttpRequest)
	{
		xmlHttp = new XMLHttpRequest();
	}
	else{
		xmlHttp = new ActiveObject("Microsoft.XMLHTTP");
	}
xmlHttp.onreadystatechange = function()
{
	if(xmlHttp.readyState==4 && xmlHttp.status==200)
	{
		var xml = xmlHttp.responseXML;
		buku = xml.documentElement.getElementByIdTagName("buku");
		judul = buku[0].getElementByIdTagName("judul")[0].childNodes[0].nodeValue;
		document.getElementById("katalog").innerHTML = judul;
	}
}
xmlHttp.open("GET",file,true);
xmlHttp.send("");
}