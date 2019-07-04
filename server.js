
const express = require('express');
const Twitter = require('twitter');
const config = require('./config.js');
const port = 3001;

const app = express();

app.listen(port);

const T = new Twitter(config); 

app.get('/api/tweets', (req, res) => {
    const params = {
        q: req.query.q,
        count: req.query.count,
        result_type: 'recent',
        lang: 'en'
    };

    T.get('search/tweets/', params, function(err, data, response) {
        if(!err){          
            res.send(data);
        } else {
            res.status(500).send(err)
        }
    })
});

app.get('/api/tweet', (req, res) => {    
    const id = req.query.id;        
    T.get(`statuses/show/${id}`, {}, function(err, data, response) {
        if(!err){          
            res.send(data);
        } else {            
            res.status(500).send(err)        
        }
    })
});