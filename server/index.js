import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import App from '../client/components/App';

import { StaticRouter } from 'react-router-dom';

const app = express();
const port = 3000;

const { TestContext } = require("../client/context/context");

app.get('/', (req, res) => {
    const context = {};
    const jsx = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <TestContext.Provider value={{ hello: "Server context initialize" }}>
                <App />
            </TestContext.Provider>
        </StaticRouter>
    ); 

    const clientBundleScript = `<script src="http://localhost:8080/scripts/bundle.js"></script>`; 
    const clientBundleStyle = `<link rel="stylesheet" href="http://localhost:8080/styles/bundle.css">`; 

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pokedex</title>
                ${clientBundleStyle} 
            </head>
            <body>
                <div id='ssr-app'>${jsx}</div> 
                ${clientBundleScript} 
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});