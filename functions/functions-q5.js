function load_q5()
{
	var request = new XMLHttpRequest();

	request.open("GET", "/get_q5", true);
	request.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		var objMessages;
		if(request.readyState === DONE){
			if(request.status === OK){
				objMessages = JSON.parse(request.responseText);
				document.getElementById("wall-q5").innerHTML = "";

				for(var i = 0; i < objMessages.length; ++i){
					var msg = document.createElement("LI");
					var element = document.createTextNode("Categoria: " + objMessages[i].resultado);
					msg.appendChild(element);
					document.getElementById("wall-q5").appendChild(msg);
				}

			}
			else{
				document.getElementById("wall-q5").innerHTML = 'Error: ' + request.status;
			}
		}
	}

	request.send();

}

function submit_q5()
{
	var request = new XMLHttpRequest();
	request.open("POST", "/rec_q5", true);
	request.setRequestHeader("Content-type", "application/json");
	var idade = document.getElementById('idade-q5').value;
	var obj = {"idade":idade}
	var data = JSON.stringify(obj);
	request.send(data);
	load_q5();
}

