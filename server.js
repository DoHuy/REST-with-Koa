const nunjucks = require('nunjucks');
const koa = require('koa');
require('dotenv').load();
const bodyParser = require('koa-bodyparser');
const app = new koa();
const router = require('./http/router');

// use body-parser
app.use(bodyParser());

// use nunjucks

nunjucks.configure('views',{
    autoescape: true,
    koa: app,
    watch: true
})

// use router
app.use(router.routes(), router.allowedMethods());

// error handling
app.on('error',(err, ctx)=>{
    console.log(err.message);
});

// listen port 3000
app.listen(process.env.WEB_PORT, function () {

    console.log("server listenning at 3000");
});
