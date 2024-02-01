const http = require("http");

const server = http.createServer((req, resp) => {
  resp.write("hello worlddd");
  resp.end("user");
});

server.listen(8080, "localhost", () => {
  console.log("server running");
});
//for repl
//node enter and perform the operations
