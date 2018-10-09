function load_q1()
{
	var request = new XMLHttpRequest();
	request.open("GET", "/get_q1", true);
	request.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		var objMessages;
		if(request.readyState === DONE){
			if(request.status === OK){
				objMessages = JSON.parse(request.responseText);
				document.getElementById("wall-q1").innerHTML = "";

				for(var i = 0; i < objMessages.length; ++i){
					var msg = document.createElement("LI");
					var element = document.createTextNode(objMessages[i].nome +" " + objMessages[i].salario);
					msg.appendChild(element);
					document.getElementById("wall-q1").appendChild(msg);
				}

			}
			else{
				document.getElementById("wall-q1").innerHTML = 'Error: ' + request.status;
			}
		}
	}

	request.send();

}

function submit_q1()
{
	//document.getElementById("test").innerHTML = document.getElementById("name").value;
	var request = new XMLHttpRequest();
	request.open("POST", "/rec_q1", true);
	request.setRequestHeader("Content-type", "application/json");
	var nome = document.getElementById('nome').value;
	var cargo = document.getElementById('cargo').value;
	var salario = document.getElementById('salario').value;
	var obj = {"nome":nome, "cargo":cargo, "salario": salario}
	var data = JSON.stringify(obj);
	request.send(data);
	load_q1();
}

