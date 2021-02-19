/*
왜 Express를 사용하는가
Express와 Django의 큰 차이점은 무엇일까?
1. 웹 시장 점유율은 Express가 압도하고 있다.
2. Express는 충분한 레퍼런스를 가지고 있음
3. Django는 개발이 쉽지만 진입장벽이 Express 에 비해 높음
*/
const http = require('http')
http.createServer((request,response)=> {
    response.writeHead(200,{'Content-Type:':'text/plain'})
    response.write("Hello Server")
    response.end()
}).listen(8000)
// 간단하게 하는 서버 구동이 너무 쉽다.
//npm init-y 를 통해 package.json을 생성해줌
const express = require('express')
const app = express()
const port = 8000
app.get('/',(request,response)=> {
    response.send("hello express")
})