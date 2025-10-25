const mongoose=require("mongoose");
const chat=require("./models/chat.js");


main()
.then((res)=>{
    console.log("connection sucsessful....");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsaap');

  
}




let allChat=[
    {
    from:"chinu",
    to:"sinu",
    msg:"Please send me your notes",
    created_at:new Date()
},
{
    from:"rey",
    to:"rekh",
    msg:"give me some fruits",
    created_at:new Date()
},
{
    from:"hey",
    to:"me",
    msg:"love you",
    created_at:new Date()
},


];

chat.insertMany(allChat);