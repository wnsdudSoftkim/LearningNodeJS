const express = require('express')
const router = express.Router()
router.get('/',(req,res)=> {
    res.send('admin 이후 url')
})
//localhost:8000/admin/produces
router.get('/produces',(req,res)=> {
    res.send('admin 이후 url')
})