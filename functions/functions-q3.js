function load_q3()
{
	var request = new XMLHttpRequest();

	request.open("GET", "/get_q3", true);
	request.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		var objMessages;
		if(request.readyState === DONE){
			if(request.status === OK){
				objMessages = JSON.parse(request.responseText);
				document.getElementById("wall-q3").innerHTML = "";

				for(var i = 0; i < objMessages.length; ++i){
					var msg = document.createElement("LI");
					var element = document.createTextNode(objMessages[i].resultado);
					msg.appendChild(element);
					document.getElementById("wall-q3").appendChild(msg);
				}

			}
			else{
				document.getElementById("wall-q3").innerHTML = 'Error: ' + request.status;
			}
		}
	}

	request.send();

}

function submit_q3()
{
	var request = new XMLHttpRequest();
	request.open("POST", "/rec_q3", true);
	request.setRequestHeader("Content-type", "application/json");
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;
	var n3 = document.getElementById('n3').value;
	var obj = {"n1":n1, "n2":n2, "n3":n3}
	var data = JSON.stringify(obj);
	request.send(data);
	load_q3();
}

