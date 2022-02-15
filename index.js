const http = require('http')
const moment = require('moment')
const users = require('./users')
const members = require('./members')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const url = req.url
    if(url ==='/about'){
        res.write(JSON.stringify(members));
    } else if(url === '/users' ){
        res.write(JSON.stringify(users))
    } else {
        res.write('This is the home page')
    }
    res.end()
})

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
