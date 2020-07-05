const express = require('express')
const axios = require('axios')
const {connectDb} = require('./helpers/db')
const {host, port, db, apiUrl} = require('./config')
const app = express()


const startServer = () => {
  app.listen(port, () => {
    console.log('Started auth service on port:' + port)
    console.log('Host: ' + host)
    console.log('mongo url ', db)


  })
}

app.get('/test', (req, res) => {
  res.send("Our auth sever")
})
app.get('/testwithapidata', (req, res) => {

  console.log(apiUrl + '/testapidata')
  axios.get(apiUrl + '/testapidata').then(response => {
    res.json({
      testwihtapi: response.data.testwihtapi
    })
  }).catch(e =>{
    console.error(e)
  })
})
app.get('/api/currentUser', (req, res) => {
  res.json({
    id: '1234',
    email: "foo@gmal.com"
  })
})

connectDb().
    on('error', console.log).
    on('disconnect', connectDb).
    on('open', startServer)
