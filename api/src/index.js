const express = require('express')
const mongoose = require('mongoose')
const {connectDb} = require('./helpers/db')
const {host, port, db,authApiUrl} = require('./config')
const  axios = require('axios')
const app = express()
const postSchema = new mongoose.Schema({
  name: String,
})
const Post = mongoose.model('Post', postSchema)

const startServer = () => {
  app.listen(port, () => {
    console.log('Started api service on port:' + port)
    console.log('Host: ' + host)
    console.log('mongo url ', db)

    Post.find(function(error, posts) {
      if (error) {
        return console.error(error)
      }
      console.log(posts)
    })
    const silence = new Post({name: 'Silence'})
    silence.save(function(err, SavedSilence) {
      if (err) {
             return console.error(error)
         }
      console.log('SavedSilence 222',SavedSilence)
    })
    console.log(silence)
  })
}

app.get('/test', (req, res) => {
  res.send("Our api sever ")
})
app.get('/testapidata', (req, res) => {
  res.json({
    testwihtapi: true
  })
})

app.get('/testwithcurrentuser', (req, res) => {
  console.log('authApiUrl', authApiUrl)
  axios.get(authApiUrl + '/currentUser').then(response => {
    res.json({
      testwithcurrentuser: true,
      currentUserFromAuth: response.data
    })

  })
})

connectDb().
    on('error', console.log).
    on('disconnect', connectDb).
    on('open', startServer)
