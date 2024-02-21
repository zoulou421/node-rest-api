const express= require("express");
const app= express();
const port=(process.env.PORT||3000);

//parse json using express
app.use(express.json());
app.use(express.urlencoded({extended:false}));


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



//add movie to list
app.post('/movie',(req, res)=>{
    const movie=req.body;
    console.log(movie);
    movies.push(movie);
    res.send("movie added to the list"+movie);
});

//Search for a movie in the list
app.get("/movie/:id",(req, res)=>{
    //const id=parseInt(req.params.id);
    /*
        console.log(movies);
        console.log("Id  retrieved is ");
            for(let movie of movies){
                console.log(movie);
                if(req.params.id){
                    console.log(movie.id);
                    console.log("++++++++++++++++"+movie.id+"+++++++++++++++++++")
                    res.json(movie);
                    console.log(movie);
                    return
                }
            }
            res.status(400).send('movie not found');
            console.log("error");*/
    const found=movies.some(movie=>movie.id===parseInt(req.params.id));
    if(found){
        res.json(movies.filter(movie=>movie.id===parseInt(req.params.id)))
    }else{
        res.sendStatus('400');
    }


});

//Set server to listen to port: port
app.listen(port,()=>{
    console.log("server is at port:"+port);
})