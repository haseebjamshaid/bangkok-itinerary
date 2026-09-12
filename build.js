/* Wraps the artifact body (bangkok-field-notes.html) into a standalone
   index.html for GitHub Pages: real doctype, charset, viewport, meta. */
const fs = require("fs");
const body = fs.readFileSync("bangkok-field-notes.html", "utf8");
const title = (body.match(/<title>([^<]*)<\/title>/) || [, "Bangkok Field Notes"])[1];
const desc = "Six-day Bangkok route book, 11–16 Nov 2026 — every stop, every train, boat and ferry, with an interactive map for each day.";
const favicon = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>%F0%9F%90%89</text></svg>";
const head = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="${desc}">
<meta name="theme-color" content="#F4EDDF" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#F4EDDF">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<link rel="icon" href="${favicon}">
<style>
*{box-sizing:border-box}
html{color-scheme:light}
body{margin:0;font:14px system-ui,sans-serif}
img{max-width:100%}
[hidden]{display:none!important}
</style>
</head>
<body>
`;
fs.writeFileSync("index.html", head + body + "\n</body>\n</html>\n");
console.log("index.html built:", fs.statSync("index.html").size, "bytes · title:", title);
