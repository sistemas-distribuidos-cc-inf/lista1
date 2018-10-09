function load_q4()
{
	var request = new XMLHttpRequest();

	request.open("GET", "/get_q4", true);
	request.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		var objMessages;
		if(request.readyState === DONE){
			if(request.status === OK){
				objMessages = JSON.parse(request.responseText);
				document.getElementById("wall-q4").innerHTML = "";

				for(var i = 0; i < objMessages.length; ++i){
					var msg = document.createElement("LI");
					var element = document.createTextNode("Peso ideal: " + objMessages[i].resultado);
					msg.appendChild(element);
					document.getElementById("wall-q4").appendChild(msg);
				}

			}
			else{
				document.getElementById("wall-q4").innerHTML = 'Error: ' + request.status;
			}
		}
	}

	request.send();

}

function submit_q4()
{
	var request = new XMLHttpRequest();
	request.open("POST", "/rec_q4", true);
	request.setRequestHeader("Content-type", "application/json");
	var sexo = document.getElementById('sexo-q4').value;
	var altura = document.getElementById('altura-q4').value;
	var obj = {"sexo":sexo, "altura":altura}
	var data = JSON.stringify(obj);
	request.send(data);
	load_q4();
}

