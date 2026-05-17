const express = require('express');
const app = express();
const port = process.env.port || 5000;


app.get('/', (req, res) => {
    res.send('hellow world')
})
app.get('/about', (req, res) => {
    res.send('about is jumping now')
})

const users = [
    {id: 1, name: 'sheikh zim', email: 'zim@gmail.com'},
    {id: 2, name: 'shamim', email: 'shamim@gmail.com'},
    {id: 3, name: 'rana', email: 'rana@gmail.com'},
    {id: 4, name: 'sakib', email: 'sakib@gmail.com'},
    {id: 5, name: 'tamim', email: 'tamim@gmail.com'},
]


app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/products', (req, res) => {
    res.send('products is so expensive')
})

app.listen(port, () => {
    console.log(`example app listening in port ${port}`);
})