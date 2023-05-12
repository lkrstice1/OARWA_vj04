//ekvivalent naredbi import; http biblioteka koja je ugrađena u node.js
const http = require('http')
let poruke = [
 {
 id: 1,
 sadrzaj: 'HTML je jednostavan',
 },
 {
 id: 2,
 sadrzaj: 'React koristi JSX sintaksu',
 },
 {
 id: 3,
 sadrzaj: 'GET i POST su najvaznije metode HTTP protokola',
 }
]
const app = http.createServer((req, res) =>{
 res.writeHead(200, {'Content-Type': 'application/json'})
 res.end(JSON.stringify(poruke))
})
const PORT = 3001
app.listen(PORT)
console.log(`Posluzitelj je pokrenut na portu ${PORT}`);