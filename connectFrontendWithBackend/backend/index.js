import express from 'express';
const app = express();
const port = process.env.PORT || 8000

app.get('/', (req, res)=> {
     res.send("Server is ready");
});


//get a list of 5 jokes
app.get('/api/jokes', (req, res)=> {
     const jokes = [
          {
               id: 1,
               title: "A joke",
               content: "This is a joke"
          },
          {
               id: 2,
               title: "Another joke",
               content: "This is another joke"
          },
          {
               id: 3,
               title: "A third joke",
               content: "This is the third joke"
          },
          {
               id: 4,
               title: "A forth joke",
               content: "This is the forth joke"
          },
          {
               id: 5,
               title: "A fifth joke",
               content: "This is the fifth joke"
          },
          {
               id: 6,
               title: "A sixth joke",
               content: "This is the sixth joke"
          }
     ];
     res.send(jokes);
})

app.listen(port, ()=> {
     console.log("server is serving on 8000");
});