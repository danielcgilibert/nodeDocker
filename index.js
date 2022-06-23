const Docker = require('dockerode');
const express = require('express');
const docker = new Docker({ socketPath: '/var/run/docker.sock' });
const app = express();
const cors = require('cors');

//CORS
app.use(cors());

app.get('/', function (req, res) {
  docker.listContainers(function (err, containers) {
    console.log(containers);
    res.send(containers);
  });
});

app.listen(4000);
