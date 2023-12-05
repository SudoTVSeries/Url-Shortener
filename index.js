const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.send("Hello World!");
});

// Move to Database
const routeMap = {
    "bilibili": "https://bilibili.com",
    "sudotv": "https://sudo.tv",
    "link-to-1": "https://sudo.tv/zh-CN/series/url-shortener/episode/1/prepare-environment/",
};

app.get("/:route", (req, res) => {

    const route = req.params.route;

    if (routeMap[route]) {
        res.redirect(routeMap[route]);
    } else {
        res.send("404 Not Found");
    }
});

app.listen(3000, () => {

    console.log("Listening port 3000");
});
