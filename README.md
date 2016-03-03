# mitan-eko

> (really) simple log middleware for express

* * *

**mitan-eko** is a simple (really, really simple) middleware to log requests in express.

## Installation

`npm install --save mitan-eko`

## Documentation

**mitan-eko** is a middleware for express. It is written in ES2015, and you can use like this :

```javascript

import express from "express";
import mitanEko from "mitan-eko";

let app = express();

// (...) configure express

app.use( mitanEko( "my super app" ) );

app.listen( 8080 );

```

All the requests passing by the middleware will be logged with [zouti.log](https://www.npmjs.com/package/zouti#zoutilog-message-context-type-), and the optional parameters given to the middleware is the `context` passed to `zouti.log`.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint your code using eslint.

## Release History

0.1.0: initial release (03/03/2016)
