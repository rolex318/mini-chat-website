const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then((res)=>{
    console.log("connection sucsessful....");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsaap');

  
}

//Index Route
app.get("/chats",async (req,res)=>{
    let chats=await chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});

});
//New route

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})


//Create Route
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat=new chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date
    });
    newChat.save().then(res =>{console.log(res)}).catch(err=>{console.log(err)});
    res.redirect("/chats");

});

//edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chatData=await chat.findById(id)
    res.render("edit.ejs",{chatData});
})


//Update Route
app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let{msg:newmsg}=req.body;
    let updatedChat=await chat.findByIdAndUpdate(id,{msg:newmsg},
        {runValidators:true},
        {new:true});

    console.log(updatedChat);
    res.redirect("/chats");
})


//Delete Route
app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
   let deletedChat=await chat.findByIdAndDelete(id);
   console.log(deletedChat);
   res.redirect("/chats");
})


app.get("/",(req,res)=>{
    res.send("Root is working");
});





app.listen(3000,()=>{
    console.log("Server is listening to port 3000");
});