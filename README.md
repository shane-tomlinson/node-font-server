# node-font-server

A simple font server with the ability to serve distinct locale specific fonts.

## Installation
1. clone the repo - `git clone`
2. run `npm install` to install the dependencies
3. run `npm start` to start the server

## Usage
I'm trying to figure that out yet.

## Configuration
Configuration is stored in config/config.js. `local` is for development,
`production` for production. The environment can be chosen using the `NODE_ENV`
environment variable.

Alternatively, environment variables can be used to configure the server.

```
NODE_ENV=production IP_ADDRESS=192.168.2.1 PORT=8000 npm start
```

Environment variables that can be specified:

* IP_ADDRESS
* PORT
* URL
* MINIFIED
* HTTPS

## Requesting font CSS
Requests for CSS should be in the form of:

```
http(s)://domain/locale/Comma,Separated,Font,List/fonts.css
```


## Author:
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* http://github.com/stomlinson
* http://github.com/shane-tomlinson
* @shane_tomlinson

## Getting involved:
I am happy to review submissions!

## License:
This software is available under version 2.0 of the MPL:

  https://www.mozilla.org/MPL/


