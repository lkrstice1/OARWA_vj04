//ekvivalent naredbi import; http biblioteka koja je ugrađena u node.js
const express = require('express')
const app = express()

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

app.get('/api/poruke/:id', (req, res) => {
    const id = Number(req.params.id)
    const poruka = poruke.find(p => p.id === id)
    
    if(poruka){
        res.json(poruke)
    } else{
        res.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Posložitelj je pokrenut na portu ${PORT}`);
})