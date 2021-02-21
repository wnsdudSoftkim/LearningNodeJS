const express = require('express')
const router = express.Router()
router.get('/',(req,res)=> {
    res.send('admin 이후 url')
})
//03 - middleware
function testMiddleware(req,res,next) {
    console.log('test middleware')
    next()
}
function loginRequired(req,res,next){
    if('로그인이 되어있지 않으면'){
        res.redirect('로그인창으로')
    }else{
        next()
    }
}
//localhost:8000/admin/produces
//중간에 testmiddleware 뜻은 /produce를 가서 testmiddleware을 거치고
//그다음 next니까 아래에서 작성한 코드를 실행하라는 뜻
router.get('/produces',testMiddleware,loginRequired,(req,res)=> {
    //로그인이 안되있을 시 기능 하고 싶음
    if(notlogin) res.redirect('/accounts/login')
    res.send('admin 이후 url')
})