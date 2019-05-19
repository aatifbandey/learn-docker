const express = require("express");
const redis = require("redis");
const process = require('process');


const app = express();

// Location of redis server running
const client = redis.createClient({
	host: 'redis-server', // name of the service
	port: 6379 // default port for redis
});

// when server started
client.set('visits', 0);

app.get('/', (req, res, )=>{
	process.exit(1); // handle crash if the server crash
	client.get('visits', (err, visits)=>{
		res.send('Number of visits is'+visits);
		client.set('visits', parseInt(visits) + 1)
	})
})

app.listen(8082, ()=>{
	console.log("Listening on port 8082")
})