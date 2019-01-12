const proxy = require('http-proxy-middleware');

module.exports = function(app){
  app.use(proxy('/register',{target: 'http://localhost:5000'}));
  app.use(proxy('/login',{target: 'http://localhost:5000'}));
  app.use(proxy('/logout',{target: 'http://localhost:5000'}));
  app.use(proxy('/api/current_user',{target: 'http://localhost:5000'}));
  app.use(proxy('/courses',{target: 'http://localhost:5000'}));
}
