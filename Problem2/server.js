const express = require('express')
const app = express()

const data = [
    {
        "keyword": "bonfire",
        "status": "found",
        "prefix": "bonf"
    },
    {
        "keyword": "bonsai",
        "status": "found",
        "prefix": "bons"
    }
]

app.get('/',(req,res)=>{
    res.send(data)
})
app.get('/keyword:keyword',(req,res)=>{
    var exp = new RegExp(req.params.keyword,'i')
    data.find({
        keyword:exp
    })
    .then(res.status.json(result))
})
app.listen(5000,(req,res)=>{
    console.log(`Server is started at http://localhost:${5000}`)
})