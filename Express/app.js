const express = require('express')
const admin = require('./routes/admin')
const app = express()
const port = 8000
app.get('/',(req,res)=> {
    res.send('express start')
})
//app.use는 미들웨어
//admin url은 admin 파일을 참고해라
app.use('/admin',admin) 