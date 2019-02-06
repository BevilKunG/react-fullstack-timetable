const proxy = require('http-proxy-middleware');

// Use on Dev Mode only
// 
// module.exports = function(app){
//   app.use(proxy('/register',{target: 'http://localhost:5000'}));
//   app.use(proxy('/login',{target: 'http://localhost:5000'}));
//   app.use(proxy('/logout',{target: 'http://localhost:5000'}));
//   app.use(proxy('/api/*',{target: 'http://localhost:5000'}));
//   app.use(proxy('/courses',{target: 'http://localhost:5000'}));
// }
