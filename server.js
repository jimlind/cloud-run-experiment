// Create a dumb http server
const http = require("http");
http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World!");
    response.end();
}).listen(process.env.PORT || 8080);

console.log(process.env);

const { SecretManagerServiceClient } = require("@google-cloud/secret-manager").v1;
const secretManagerClient = new SecretManagerServiceClient({
    keyFilename: "",
});

const name = `projects/letterboxd-bot/secrets/DISCORD_DEV_BOT_TOKEN/versions/latest`;
secretManagerClient
    .accessSecretVersion({ name })
    .then(([response]) => console.log(response.payload.data.toString("utf8")));
