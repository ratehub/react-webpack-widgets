var express = require('express');
var path = require('path');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 0.0.0.0:3000');
});

const app = express();
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', function(req, res) {
    const result = { foo: 'foo', bar: 'bar' };
	res.status(200).send(JSON.stringify(result));
});

app.listen(4000, function(){
	console.log('Listening at 0.0.0.0:4000');
});