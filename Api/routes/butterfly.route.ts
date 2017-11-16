/**
 * Created by Aimeric on 02/11/2017.
 */
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/butterflys', (req, res) => {
    res.send('All the butterflys: ' + req)
})
app.get('/butterfly/:butterflyId', (req, res) => {
    res.send('User to load is: ' + req.params.butterflyId)
})

app.use((req, res) => {
    res.send(404, 'Not Found')
})
app.listen(PORT, () => {
    console.log('Serveur sur port : ', PORT)
})
