const fs = require("fs");
const http = require("http");

function handleError404(res) {
  fs.readFile("./project/404.html", "utf8", (err, data) => {
    if (err) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./project/index.html", "utf8", (err, data) => {
      if (err) {
        handleError404(res);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("./project/about.html", "utf8", (err, data) => {
      if (err) {
        handleError404(res);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }else if (req.url === "/contact-me") {
    fs.readFile("./project/contact-me.html", "utf8", (err, data) => {
      if (err) {
        handleError404(res);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }else{
    handleError404(res);
  }
 
});

server.listen(3000);
console.log("listening on port 3000...");
