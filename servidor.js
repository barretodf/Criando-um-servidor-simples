const http = require('http');

http.createServer((request, response)=>{
	response.writeHead(200,{
		'Content-Type':'text/plain'
	});
	response.write('Aula de node\n');  //O que o usuário vai ver na tela
	response.end();                    //finalizando a resposta

}).listen(1337);                       //Leia nessa porta
