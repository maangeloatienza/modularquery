# anytv-node-cors

[![Build Status](https://travis-ci.org/anyTV/anytv-node-cors.svg?branch=master)](https://travis-ci.org/anyTV/anytv-node-cors)
[![Coverage Status](https://coveralls.io/repos/anyTV/anytv-node-cors/badge.svg?branch=master&service=github&t)](https://coveralls.io/github/anyTV/anytv-node-cors?branch=master)
[![Dependencies](https://david-dm.org/anyTV/anytv-node-cors.svg)](https://david-dm.org/anyTV/anytv-node-cors)

Our CORS middleware for expressjs. Especially made for our awesome expressjs [boilerplate](https://github.com/anyTV/anytv-node-boilerplate).


# Install

```sh
npm install anytv-node-cors --save
```


# Usage

### Setting the middlware
On your index.js / server.js / app.js, register your database using a key.
```javascript
import cors from 'anytv-node-cors';
import express from 'express';

app = express();

app.use(cors(config));
```


# Contributing

Install the tools needed:
```sh
npm install mocha -g
npm install --dev
```


# Running test

```sh
npm test
npm test-dev #to --watch
```

# Code coverage

```sh
npm run coverage
```
Then open coverage/lcov-report/index.html.

# License

MIT


# Author
[Freedom! Labs, any.TV Limited DBA Freedom!](https://www.freedom.tm)
