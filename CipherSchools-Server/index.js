const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const feeds = require('./data/feeds.json');
const follow = require('./data/follow.json');
const communities = require('./data/community.json');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Pluton Server running')
})

app.get('/feeds', (req, res) =>{
    res.send(feeds)
})

app.get('/follow', (req, res) =>{
    res.send(follow)
})
app.get('/communities', (req, res) =>{
    res.send(communities)
})



app.listen(port, ()=>{
    console.log(`Chefs API is running on port:${port}`);
})
