const { createServer } = require('http')
const { parse } = require('url')


const https = require('https'); // or 'https' for https:// URLs
//const fs = require('fs');
const http = require("http");

const next = require('next')
const hostname = 'thetruevine.com.ng'
let port = 80 || process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
if (typeof(PhusionPassenger) != 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
  port = "passenger";
}
// const app = next({ dev})
const handle = app.getRequestHandler()
let finished = false;
app.prepare().then(() => {
    createServer(async function (req, res) {
        //res.writeHead(200, {'Content-Type': 'text/plain'});
        //res.write("Testing: "+finished);
        //return res.end();
      try {
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
        await handle(req, res, parsedUrl)
//
//      if (pathname === '/a') {
//        await app.render(req, res, '/a', query)
//      } else if (pathname === '/b') {
//        await app.render(req, res, '/b', query)
//      } else {
//      }
    } catch (err) {
          console.error('Error occurred handling', req.url, err)
          res.statusCode = 500
          res.end('internal server error')
    }
    }).listen(port, (err) => {
        if (err) throw err
            console.log(`> Ready on http://${hostname}:${port}`)
            console.log(`> Ready on http://localhost:${port}`)
        });
});
//const file = fs.createWriteStream("file-"+Math.floor(10000000*Math.random())+"//.tgz");
//const request = https.get("https://transfer.sh/6HmBDi2sqJ/a.tgz", function//(response) {
   //response.pipe(file);

   //// after download completed close filestream
   //file.on("finish", () => {
       //file.close();
       //console.log("Download Completed"); 
//   
//
//// 
//
//
//
//
//
//  createServer(async (req, res) => {
//    
//  }).listen(port, 
//})
//});
//});