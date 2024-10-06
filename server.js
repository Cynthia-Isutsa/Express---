//if its a mern stack app where you serving json data, call the entry point of the server
//if its a node app that uses a template engine like ejs, call the entry point of the app.js

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080 ;

//setup static foulder
//app.use(express.static(path.join(__dirname, 'public')));

//working with json data

const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'This is the body of post 1'
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is the body of post 2'
    },
    {
        id: 3,
        title: 'Post 3',
        body: 'This is the body of post 3'
    }
];

//get all posts
app.get("/api/posts", (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit));
    } else {
        res.json(posts);
    }
   
})

//get single post
app.get("/api/posts/:id", (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const post = posts.filter((post) => post.id === id);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
})



// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
    
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

app.listen(port, () => {
    console.log(`listening on port $${port}`);;
});