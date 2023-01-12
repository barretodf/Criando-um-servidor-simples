### Criando-um-servidor-simples
##Estudando node.js
// node --version = mostra a versão do node
// node + enter = vai inicializar o node
// .help = mostra os comandos do node

*** console.log("escreve no console")

no prompr eu escrevo: 

*** node //Vai abrir o node
*** nome da pasta que quero rodar //vai abrir a pasta  

*** .exit = sai do console do node (ctrl c da opções de saida)


------------------------------------Criando um servidor simples-----------------------------------

// Para criar um servidor eu tenho que dar um riquire no http 
Criar um objeto http e trabalhar com requisição e resposta e 
no final a gente indica qual a porta que o servidor vai estar funcionando.

                      -------------------HTTP.CAT------------------

VOU USAR O SITE HTTP.CAT
PARA VERIFICAR OS STATUS DO SERVIDOR
esse site explica os avisos que um servidor nos dá, se der um erro eu saberei o que é.

CRIANDO no vs code:

// Vou criar uma constante http, vou utilizar uma requisição e vou avisar para a requisição 
que eu quero usar o módulo http.

*** const http = require('http')

//agora eu crio o http e vou usar a função createServer()
  eu vou passar uma aero function com as variáveis de requisição e resposta
//na minha aero function vou colocar a response.writeHead() informando qual é o cabeçalho
//no http.cat 200 significa ok
//no cabeçalho eu escrevo: (200,{'Content-Type':'text/plain'}) Tenho aqui minha resposta


//A requisição vem eu eu retorno uma resposta pra ela, 
   o que eu respondi pra ela foi: no cabeçalho, escreva writeHead com o status 200, o  
   Content-Type é um text/plain que é um texto normal e 200 a resposta é ok.

--------------------------------------criando a resposta--------------------------------------

const http = require('http');

http.createServer((request, response)=>{
	response.writeHead(200,{
		'Content-Type':'text/plain'
	});
	response.write('Aula de node\n');  //O que o usuário vai ver na tela
	response.end();                    //finalizando a resposta

}).listen(1337);                       //Leia nessa porta

//foi criado e está funcionando
vou no servidor e digito: localhost:1337 + enter
vai aparecer o que escrevi no servidor.

*Se eu mudar o que escrevi no servidor, tenho que parar ele no prompt e rodar denovo
*Se eu quiser digitar isso numericamente eu coloco
127.0.:1337  //o 1337 é a porta que selecionei
