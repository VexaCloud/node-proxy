const express = require("express");
const httpProxy = require("http-proxy");
const HttpProxyAgent = require("http-proxy-agent");

const app = express();

const UPSTREAM = "http://129.146.22.123:80"; 

const agent = new HttpProxyAgent(UPSTREAM);

const proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  agent,
  secure: false,
  xfwd: true
});

app.use("/", (req, res) => {
  const target = req.query.url;
  if (!target) {
    return res.send("Usage: /?url=https://example.com");
  }

  proxy.web(req, res, { target }, (err) => {
    console.error("Proxy error:", err);
    res.status(500).send("Proxy error");
  });
});

app.listen(3000, () => {
  console.log("Proxy running on http://localhost:3000");
});
