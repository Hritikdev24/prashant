const express=require("express");
const port=9090;

const app=express();


app.get("/",(res,req)=>{
  res.status(200),json({"msg":"Hi Hritik"});
})


app.listen(port,()=>{
    console.log(`server has been create:${port}`);
})