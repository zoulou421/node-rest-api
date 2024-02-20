const express= require("express");
const app= express();
const port=(process.env.PORT||3000);

let movies=[
    {
    id:1,
    title:'Cross over',
    director: 'Bonevy BEBY',
    release_date:'2020-07-16',
    },
    {
        id:2,
        title:'Cross over2',
        director: 'Laurore BEBY',
        release_date:'2023-07-16',
    }
];

//Get the movies list in the of json
app.get('/movie',(req, res)=>{
    res.json(movies);
});

//Set server to listen to port: port
app.listen(port,()=>{
  console.log("server is at port:"+port);
})
