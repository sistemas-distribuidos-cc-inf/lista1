function load_q8()
{
	var request = new XMLHttpRequest();

	request.open("GET", "/get_q8", true);
	request.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		var objMessages;
		if(request.readyState === DONE){
			if(request.status === OK){
				objMessages = JSON.parse(request.responseText);
				document.getElementById("wall-q8").innerHTML = "";

				for(var i = 0; i < objMessages.length; ++i){
					var msg = document.createElement("LI");
					var element = document.createTextNode("Saldo médio: " + objMessages[i].saldo + 
										" | Crédito: " + objMessages[i].credito);
					msg.appendChild(element);
					document.getElementById("wall-q8").appendChild(msg);
				}

			}
			else{
				document.getElementById("wall-q8").innerHTML = 'Error: ' + request.status;
			}
		}
	}

	request.send();

}

function submit_q8()
{
	var request = new XMLHttpRequest();
	request.open("POST", "/rec_q8", true);
	request.setRequestHeader("Content-type", "application/json");
	var saldo = document.getElementById('saldo-q8').value;
	var obj = {"saldo":saldo}
	var data = JSON.stringify(obj);
	request.send(data);
	load_q8();
}node ap	


