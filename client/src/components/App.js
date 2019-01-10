import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './Header';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" component={()=><h2>Landing Page</h2>} exact/>
          <Route path="/getregister" component={RegisterForm}/>
          <Route path="/getlogin" component={LoginForm}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
