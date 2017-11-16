
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/skills', (req, res) => {
    res.send('All the skills: ' + req)
})
app.get('/skill/:skillId', (req, res) => {
    res.send('User to load is: ' + req.params.skillId)
})

app.use((req, res) => {
    res.send(404, 'Not Found')
})
app.listen(PORT, () => {
    console.log('Serveur sur port : ', PORT)
})
