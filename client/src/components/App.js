import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = (props) => {
  return (
    <div>
      React Fullstack Timetable
      <RegisterForm/>
      <LoginForm/>
    </div>
  );
}

export default App;
