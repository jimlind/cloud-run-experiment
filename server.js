// Create a dumb http server
const http = require("http");
http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World!");
    response.end();
}).listen(process.env.PORT || 8080);

console.log(process.env);
