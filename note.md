## REQUISIÇÃO

a resposta do servidor sempre retornará uma requisição com Cabeçalho http , com o seu status 
e o corpo da resposta o tipo de dado requisitado como JSON HTML TEXTO 

Quando chama na aplicação fetch(url) o navegador inicia a cominucação com o servidor ( end point ) . O próximo passo é o retorno de resposta do servidor 
Esse retorno de dados pode ser enviado em partes, assim que todos os dados são encaminhados a Promise que o fetch retornou é resolvida 

Você mosta a estrutura de uma requisição já com o tipo do dados retornado ou enviado, um tratamento do erro caso dê algum erro do pedido na parte do client , exemplo :
-
<script>
    fetch('https://api.exemplo.com/data')
        .then(response => {
            console.log('Resposta recebida', response )   
            return response.json() ;         // lê o corpo e converte os dados para JSON 
        })

        .then(data => {
            return data ;
        })

        .catch(error => {
            console.error('Erro de processo', error)
        });
</script>

*reponse é o objeto que trás informções como status do HTTP 
 a primeira parte retorna o cabeçalho da requisição solicitado no end point
 já a segunda parte retorna o corpo , com o tipo de arquivo de dado de fato, o conteudo.  

No cabeçalho temos response.status que retornam codigos de status exemplo. 200, 404, 500 ou ele em formato de texto response.statusText
Quando se diz entrada, é o que a função criada requisita e processa , saída é o retorno do que foi requisitado ao end point ( não descartando o erro )

Principais Cabeçalhos que Você Pode Encontrar :
 Content-Type: Indica o tipo do corpo da resposta (ex.: application/json, text/html).
 Content-Length: Tamanho do corpo da resposta em bytes.
 Cache-Control: Indica regras de cache para o recurso.
 Date: Data e hora em que a resposta foi gerada.
 Server: Informações sobre o servidor que processou a requisição.
 Authorization ou WWW-Authenticate: Relacionados a autenticação.

Async await function

Quando uma função com async é declarada ela retorna por padrão uma promisse ( local onde temos o response, o tipo de dados e o cabeçalho do dado )
Dentro da função async podemos usar uma palavra chave await que parará a minha execução até que a minha promisse seja rejeitada ou resolvida 

Await também extrai o valor resolvido da Promise sem que o .then() precise ser usado 


Exemplo da funcionalidade de uma API KEY usando o end point do OpenWeatherMap 

<script>
    const apiKey = 'acgtdhsp-57che8f-vjd8' ;
    const city = 'São Paulo' 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then( response => response.json())
        .then( data => console.log(data))
        .catch( error => console.log('Cidade inválida', error)); 
</script>

*perceba o object string informando a cidade que será puxada quando o usuario solicit-lá no input e a chave passada pela API 

Por que a API Key é importante?
Sem a chave: O servidor não sabe quem está fazendo a requisição e pode bloquear o acesso.
Com a chave: O servidor reconhece o cliente, aplica limites e permite acesso ao serviço de acordo com as regras do plano associado àquela chave.

TRY/CATCH:

O try nada mais testa um erro 
Se dentro do bloco try houver um erro, durando sua execução o bloco catch será acionado sem parar o programa

<script>
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

        const posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.error('Erro:', erro.message);
    }
</script>

!response.ok está verificando se a requisição feita com fetch está bem sucedida , se sim converte os dados para JSON response.json()
se estiver algum erro no fetch ou no response.json() será enviado para o catch 

Pontos o await