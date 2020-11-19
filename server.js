const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

  console.log(req.url)


  if (req.url === '/' || req.url === '/favicon.ico') {
    const body = fs.readFileSync(`./public/index.html`, 'utf-8')
    res.end(body)
  } else {

    try {
      const body = fs.readFileSync(`./public${req.url}`, 'utf-8')
      res.end(body)
    } catch (err) {
        if (err.code === 'ENOENT') {
          console.log('File not found!');
        } else {
          throw err;
        }
      }


  }

})


const port = process.env.PORT || 3000
server.listen(port)

console.log('Server started')
