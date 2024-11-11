fetch('https://api.exemplo.com/data')
.then(response => {
    console.log('Resposta recebida', response )
    return response.json() ;         // processa o corpo da resposta 
})

.then(data => {
    console.log('dados enviados',data)  ;
})

.catch(error => {
    console.error('Erro de processo', error)
});

//teste Api key

const apiKey = 'acgtdhsp-57che8f-vjd8' ;
const city = 'São Paulo' 

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then( response => response.json())
    .then( data => console.log(data))
    .catch( error => console.log('Cidade inválida', error)); 

async function fetchPosts() {
    
}