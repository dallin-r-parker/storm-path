var express = require("express");
var stormpath = require("express-stormpath");

var app = express();

app.use(stormpath.init(app, {
    application:process.env.STORMPATH_URL,
}));

app.get('/', function(req, res) {
  res.send('Hey there! thanks for visiting my site, be sure to <a hred='/login>login</a>!');
});

app.listen(process.env.PORT || 3000);
