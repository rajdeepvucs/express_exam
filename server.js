const express = require('express')
const cors=require('cors')
const app = express()
var corOptions={
    orgin:'https://localhost:3000'
}
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const router=require('./routes/productsRoutes.js');
app.use('/api/product',router);
app.get('/',(req,res) => {
    res.json({message:'from api'})
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})