const http = require('http')
// console.log(http);
const fs = require('fs');

let port = 8080;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
       fs.readFile('myfile.txt', 'utf-8', (err, data) => {
            if (err) {
                res.end(err.toString());
            } else {
                res.end(data);
            }
        });
    }

    if(req.url=== "/write"){
        fs.writeFile('myfile.txt', "I am writing code here\n", 'utf-8', (err)=>{
            if(err) return res.end(err);
            else return res.end('thi file has been written'); 
        })
    }

    if (req.url === '/about') {
        res.end('Welcome to the about page');
    }
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
})
