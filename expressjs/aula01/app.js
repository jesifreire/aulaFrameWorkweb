const express = require('express')
const app = express();
const port = 8080;


app.get('/aula', (req, resp) => {
    resp.send("Primeiro Endpoint, aula 01 ");
})

app.post('/spi', (req, resp) => {
    resp.send("Aula SPI, aula 01 - service 2 ");
})

app.listen(port, () => { console.log('Aplicação com express porta ' + port) })

app.put('/aula',(req, res) => {
    resp.send('Tá Put');
})

app.delete('/aula',(req, res) =>{
    resp.send('Server offline port');

})
app.listen(port, () => {console.log('Server online porta: ')})