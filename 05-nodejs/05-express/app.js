const http = require('http');
const fs = require('fs');

http
.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });


    const url = req.url;

    const renderHTML = (path, res)=>{
        fs.readFile(path, (err, data)=>{
            if(err){
                res.write('Halaman Tidak Ditemukan');
            }else{
                res.write(data);
            }
            res.end();
        })
    }

    if(url === "/contact"){
        renderHTML('./contact.html', res);
    }else if(url === "/about"){
        renderHTML('./about.html', res);
    }else{
        renderHTML('./index.html', res);
    }   
    
}).listen(3000, ()=>{
    console.log('Server is listening on port 3000');
})