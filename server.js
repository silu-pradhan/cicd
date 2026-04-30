import express from 'express';
import sum from './sum.js';
const app=express();
const port =8080;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}   );
app.get('/home',(req,res)=>{
    res.send('Hello World!');
});

app.get('/getsum/:a/:b',async (req,res)=>{
  const {a,b}=req.params
  res.json({
    result:sum(parseInt(a),parseInt(b))
  })
})