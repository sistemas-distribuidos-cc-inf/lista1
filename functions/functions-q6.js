function load_q6()
{
	var request = new XMLHttpRequest();

	request.open("GET", "/get_q6", true);
	request.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		var objMessages;
		if(request.readyState === DONE){
			if(request.status === OK){
				objMessages = JSON.parse(request.responseText);
				document.getElementById("wall-q6").innerHTML = "";

				for(var i = 0; i < objMessages.length; ++i){
					var msg = document.createElement("LI");
					var element = document.createTextNode("Nome: " + objMessages[i].nome +
										" | Nivel: " + objMessages[i].nivel +
										" | Salario Liquido: " + objMessages[i].salario);
					msg.appendChild(element);
					document.getElementById("wall-q6").appendChild(msg);
				}

			}
			else{
				document.getElementById("wall-q6").innerHTML = 'Error: ' + request.status;
			}
		}
	}

	request.send();

}

function submit_q6()
{
	var request = new XMLHttpRequest();
	request.open("POST", "/rec_q6", true);
	request.setRequestHeader("Content-type", "application/json");
	var nome = document.getElementById('nome-q6').value;
	var nivel = document.getElementById('nivel-q6').value;
	var salario_bruto = document.getElementById('salario-q6').value;
	var num_dependentes = document.getElementById('dep-q6').value;
	var obj = {"nome":nome, "nivel":nivel, "salario":salario_bruto, "num_dependentes":num_dependentes}
	var data = JSON.stringify(obj);
	request.send(data);
	load_q6();
}

