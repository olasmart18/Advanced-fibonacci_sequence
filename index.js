const http = require("http");
const PORT = 3000
const server = http.createServer()


server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})