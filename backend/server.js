import express from 'express';

const app = express();

app.use(express.static('dist'));

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {
    const jokes=[
        {
          id:1,
          title:"A joke 1",
          content: "This is my joke",
        },
         {
          id:2,
          title:"A joke 2",
          content: "This is my joke",
        },

         {
          id:3,
          title:"A joke 3",
          content: "This is my joke",
        },

         {
          id:4,
          title:"A joke 4",
          content: "This is my joke",
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});

    
