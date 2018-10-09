var express = require('express'); //express module
var app = express();  //express object
var bodyParser = require('body-parser'); //request's body processor
var path = require('path'); //module to handle files' path
var fs = require('fs'); //filemanager/handler module
var q1_file = __dirname + '/json/q1.json'; //message file
var q2_file = __dirname + '/json/q2.json'; //message file
var q3_file = __dirname + '/json/q3.json'; //message file
var q4_file = __dirname + '/json/q4.json'; //message file
var q5_file = __dirname + '/json/q5.json'; //message file
var q6_file = __dirname + '/json/q6.json'; //message file
var q7_file = __dirname + '/json/q7.json'; //message file
var q8_file = __dirname + '/json/q8.json'; //message file

app.use(bodyParser.json()); //loads json module into express

app.get('/', function(req, res)
{
	//feeds index.html to request
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/functions/functions-q1.js', function(req, res)
{
	//feeds index.html to request
	res.sendFile(path.join(__dirname, '/functions/functions-q1.js'));
});

app.get('/functions/functions-q2.js', function(req, res)
{
	//feeds index.html to request
	res.sendFile(path.join(__dirname, '/functions/functions-q2.js'));
});

app.get('/functions/functions-q3.js', function(req, res)
{
	//feeds index.html to request
	res.sendFile(path.join(__dirname, '/functions/functions-q3.js'));
});

app.get('/functions/functions-q4.js', function(req, res)
{
	//feeds index.html to request
	res.sendFile(path.join(__dirname, '/functions/functions-q4.js'));
});

app.get('/functions/functions-q5.js', function(req, res)
{
	//feeds index.html to request
	res.sendFile(path.join(__dirname, '/functions/functions-q5.js'));
});

app.get('/functions/functions-q6.js', function(req, res)
{node ap	

	//feeds index.html to request
	res.sendFile(path.join(__dirname, '/functions/functions-q6.js'));
});

app.get('/functions/functions-q7.js', function(req, res)
{
	//feeds index.html to request
	res.sendFile(path.join(__dirname, '/functions/functions-q7.js'));
});

app.get('/functions/functions-q8.js', function(req, res)
{
	//feeds index.html to request
	res.sendFile(path.join(__dirname, '/functions/functions-q8.js'));
});

app.get('/get_q1', function(req, res)
{
	var obj = JSON.parse(fs.readFileSync(q1_file));
	for(var i = 0; i < obj.length; i++){
		var novo_salario = parseFloat(obj[i].salario, 10);
		if(obj[i].cargo === 'programador'){
			novo_salario *= 1.18;
			console.log(novo_salario);
			obj[i].salario = novo_salario.toString();
		}
		else if(obj[i].cargo === 'operador'){
			novo_salario *= 1.2;
			console.log(novo_salario);
			obj[i].salario = novo_salario.toString();
		}
	}
	res.send(obj);
});

app.get('/get_q2', function(req, res)
{
	var obj = JSON.parse(fs.readFileSync(q2_file));
	var idade = parseInt(obj[0].idade, 10);
	var result;
	if(obj[0].sexo === 'masculino' && idade >= 18){
		result = JSON.parse('[{"idade":"Maioridade"}]');
	}
	else if(obj[0].sexo === 'feminino' && idade >= 21){
		result = JSON.parse('[{"idade":"Maioridade"}]');
	}
	else{
		console.log('what?');
		result = JSON.parse('[{"idade":"Menoridade"}]');
	}
	console.log(result);
	res.send(result);
});

app.get('/get_q3', function(req, res)
{
	var obj = JSON.parse(fs.readFileSync(q3_file));
	var n1 = parseFloat(obj[0].n1, 10);
	var n2 = parseFloat(obj[0].n2, 10);
	var n3 = parseFloat(obj[0].n3, 10);
	var m = (n1+n2)/2;
	var result;
	if(m >= 7){
		result = JSON.parse('[{"resultado":"Aprovado"}]');
	}
	else if(m > 3 && m < 7){
		if((m+n3)/2 >= 5){
			result = JSON.parse('[{"resultado":"Aprovado"}]');
		}
		else{
			result = JSON.parse('[{"resultado":"Reprovado"}]');
		}
	}
	else{
		result = JSON.parse('[{"resultado":"Reprovado"}]');
	}
	console.log(result);
	res.send(result);
});

app.get('/get_q4', function(req, res){
	var obj = JSON.parse(fs.readFileSync(q4_file));
	var altura = parseFloat(obj[0].altura, 10);
	var result;
	var peso;
	if(obj[0].sexo === 'M'){
			peso = (72.7 * altura) - 58;
			result = JSON.parse('[{"resultado":"' + peso.toString() + '"}]');
	}
	else if(obj[0].sexo === 'F'){
			peso = (62.1 * altura) - 44.7;
			result = JSON.parse('[{"resultado":"' + peso.toString() + '"}]');
	}
	else{
			result = JSON.parse('[{"resultado":"Valores invalidos"}]');
	}
	console.log(result);
	res.send(result);
});

app.get('/get_q5', function(req, res){
	var obj = JSON.parse(fs.readFileSync(q5_file));
	var idade = parseInt(obj[0].idade, 10);
	if(idade >= 5 && idade <= 7){
			result = JSON.parse('[{"resultado":"Infantil A"}]');
	}
	else if(idade >= 8 && idade <= 10){
			result = JSON.parse('[{"resultado":"Infantil B"}]');
	}
	else if(idade >= 11 && idade <= 13){
			result = JSON.parse('[{"resultado":"Juvenil A"}]');
	}
	else if(idade >= 14 && idade <= 17){
			result = JSON.parse('[{"resultado":"Juvenil B"}]');
	}
	else if(idade >= 18){
			result = JSON.parse('[{"resultado":"Adulto"}]');
	}
	else{
			result = JSON.parse('[{"resultado":"Valores invalidos"}]');
	}
	console.log(result);
	res.send(result);
});

operadorapp.get('/get_q6', function(req, res){
	var obj = JSON.parse(fs.readFileSync(q6_file));
	var salario = parseFloat(obj[0].salario, 10);
	var num_dependentes = parseInt(obj[0].num_dependentes, 10);
	var result;
	
	if(obj[0].nivel === 'A'){
		if(num_dependentes == 0){
			salario*=0.97;
		}
		else{
			salario*=0.92;
		}
	}
	else if(obj[0].nivel === 'B'){
		if(num_dependentes == 0){
			salario*=0.95;
		}
		else{
			salario*=0.9;
		}
	}
	else if(obj[0].nivel === 'C'){
		if(num_dependentes == 0){
			salario*=0.92;
		}
		else{
			salario*=0.85;
		}
	}
	else if(obj[0].nivel === 'D'){
		if(num_dependentes == 0){
			salario*=0.9;
		}
		else{
			salario*=0.83;
		}
	}
	else{
		obj[0].nome = "Dados invalidos";
		obj[0].nivel = "Dados invalidos";
		salario = "Dados invalidos";
	}

	result = JSON.parse('[{"nome":"' + obj[0].nome +
				'", "nivel":"' + obj[0].nivel +
				'", "salario":"' + salario.toString() + '"}]');
	res.send(result);
});

app.get('/get_q7', function(req, res){
	var obj = JSON.parse(fs.readFileSync(q7_file));
	var idade = parseInt(obj[0].idade);
	var tempo_servico = parseInt(obj[0].tempo_servico);
	var result;
	if(idade >= 65 && tempo_servico >= 30){
			result = JSON.parse('[{"resultado":"Aprovada"}]');
	}
	else{
			result = JSON.parse('[{"resultado":"Negada"}]');
	}
	console.log(result);
	res.send(result);
});

app.get('/get_q8', function(req, res){
	var obj = JSON.parse(fs.readFileSync(q8_file));
	var saldo = parseFloat(obj[0].saldo);
	var credito;
	var result;

	if(saldo >= 0 && saldo <= 200){
		credito = 0;
	}
	else if(saldo > 200 && saldo <= 400){
		credito = saldo*0.2;
	}
	else if(saldo > 400 && saldo <= 600){
		credito = saldo*0.3;
	}
	else if(saldo > 600){
		credito = saldo*0.4;
	}
	
	result = JSON.parse('[{"saldo":"' + saldo.toString() + '", "credito":"' + credito.toString() + '"}]');
	console.log(result);
	res.send(result);
});

app.post('/rec_q1', function(req, res)
{
	//Read from file
	fs.writeFileSync(q1_file, "[]");
	var obj = JSON.parse(fs.readFileSync(q1_file));
	obj.push(req.body);

	//Write to file
	fs.writeFileSync(q1_file, JSON.stringify(obj));

	res.append('Content-type', 'application/json');

	//Send object
	console.log(req.body);
	res.json(obj);

});

app.post('/rec_q2', function(req, res)
{
	//Read from file
	fs.writeFileSync(q2_file, "[]");
	var obj = JSON.parse(fs.readFileSync(q2_file));
	obj.push(req.body);

	//Write to file
	fs.writeFileSync(q2_file, JSON.stringify(obj));

	res.append('Content-type', 'application/json');

	//Send object
	console.log(req.body);
	res.json(obj);
});


app.post('/rec_q3', function(req, res)
{
	//Read from file
	fs.writeFileSync(q3_file, "[]");
	var obj = JSON.parse(fs.readFileSync(q3_file));
	obj.push(req.body);

	//Write to file
	fs.writeFileSync(q3_file, JSON.stringify(obj));

	res.append('Content-type', 'application/json');

	//Send object
	console.log(req.body);
	res.json(obj);
});

app.post('/rec_q4', function(req, res)
{
	//Read from file
	fs.writeFileSync(q4_file, "[]");
	var obj = JSON.parse(fs.readFileSync(q4_file));
	obj.push(req.body);

	//Write to file
	fs.writeFileSync(q4_file, JSON.stringify(obj));

	res.append('Content-type', 'application/json');

	//Send object
	console.log(req.body);
	res.json(obj);
});

app.post('/rec_q5', function(req, res)
{
	//Read from file
	fs.writeFileSync(q5_file, "[]");
	var obj = JSON.parse(fs.readFileSync(q5_file));
	obj.push(req.body);

	//Write to file
	fs.writeFileSync(q5_file, JSON.stringify(obj));

	res.append('Content-type', 'application/json');

	//Send object
	console.log(req.body);
	res.json(obj);
});


app.post('/rec_q6', function(req, res)
{
	//Read from file
	fs.writeFileSync(q6_file, "[]");
	var obj = JSON.parse(fs.readFileSync(q6_file));
	obj.push(req.body);

	//Write to file
	fs.writeFileSync(q6_file, JSON.stringify(obj));

	res.append('Content-type', 'application/json');

	//Send object
	console.log(req.body);
	res.json(obj);
});

app.post('/rec_q7', function(req, res)
{
	//Read from file
	fs.writeFileSync(q7_file, "[]");
	var obj = JSON.parse(fs.readFileSync(q7_file));
	obj.push(req.body);

	//Write to file
	fs.writeFileSync(q7_file, JSON.stringify(obj));

	res.append('Content-type', 'application/json');

	//Send object
	console.log(req.body);
	res.json(obj);
});

app.post('/rec_q8', function(req, res)
{
	//Read from file
	fs.writeFileSync(q8_file, "[]");
	var obj = JSON.parse(fs.readFileSync(q8_file));
	obj.push(req.body);

	//Write to file
	fs.writeFileSync(q8_file, JSON.stringify(obj));

	res.append('Content-type', 'application/json');

	//Send object
	console.log(req.body);
	res.json(obj);
});

app.listen(3000, function()
{
	console.log('Listening on port 3000!');
});
