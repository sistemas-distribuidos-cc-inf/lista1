function load_q7()
{
	var request = new XMLHttpRequest();

	request.open("GET", "/get_q7", true);
	request.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		var objMessages;
		if(request.readyState === DONE){
			if(request.status === OK){
				objMessages = JSON.parse(request.responseText);
				document.getElementById("wall-q7").innerHTML = "";

				for(var i = 0; i < objMessages.length; ++i){
					var msg = document.createElement("LI");
					var element = document.createTextNode("Aposentadoria: " + objMessages[i].resultado);
					msg.appendChild(element);
					document.getElementById("wall-q7").appendChild(msg);
				}

			}
			else{
				document.getElementById("wall-q7").innerHTML = 'Error: ' + request.status;
			}
		}
	}

	request.send();

}

function submit_q7()
{
	var request = new XMLHttpRequest();
	request.open("POST", "/rec_q7", true);
	request.setRequestHeader("Content-type", "application/json");
	var idade = document.getElementById('idade-q7').value;
	var tempo_servico = document.getElementById('tempo-q7').value;
	var obj = {"idade":idade, "tempo_servico":tempo_servico}
	var data = JSON.stringify(obj);
	request.send(data);
	load_q7();
}

