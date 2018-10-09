function load_q2()
{
	var request = new XMLHttpRequest();

	request.open("GET", "/get_q2", true);
	request.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		var objMessages;
		if(request.readyState === DONE){
			if(request.status === OK){
				objMessages = JSON.parse(request.responseText);
				document.getElementById("wall-q2").innerHTML = "";

				for(var i = 0; i < objMessages.length; ++i){
					var msg = document.createElement("LI");
					var element = document.createTextNode(objMessages[i].idade);
					msg.appendChild(element);
					document.getElementById("wall-q2").appendChild(msg);
				}

			}
			else{
				document.getElementById("wall-q2").innerHTML = 'Error: ' + request.status;
			}
		}
	}

	request.send();

}

function submit_q2()
{
	//document.getElementById("test").innerHTML = document.getElementById("name").value;
	var request = new XMLHttpRequest();
	request.open("POST", "/rec_q2", true);
	request.setRequestHeader("Content-type", "application/json");
	var sexo = document.getElementById('sexo-q2').value;
	var idade = document.getElementById('idade-q2').value;
	var obj = {"sexo":sexo, "idade":idade}
	var data = JSON.stringify(obj);
	request.send(data);
	load_q2();
}

