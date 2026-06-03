//Express shit

import express from 'express'
const app = express()
const port = 3000

app.use(express.static('cwh19/public'))

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/',(req,res)=>{
    res.send('hello world!2');
    // console.log(req.params)
})

app.get('/blog',(req,res)=>{
    res.send('hello blogggers !');
    // console.log(req.params)
})
app.get('/blog/:slug',(req,res)=>{
    res.send(`hello guy! welcome to ${req.params.slug}`);
    // console.log(req.query) thing in url after ?
})




app.listen(port,()=>{
    console.log('well app is listening on port ',port)
})