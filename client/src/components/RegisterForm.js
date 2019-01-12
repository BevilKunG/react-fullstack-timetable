import React from 'react';

const RegisterForm = () => {
  return(
    <form action="/register" method="POST" className="ui form">
      <div className="field">
        <label htmlFor="username">Username</label>
        <input name="username" type="text"/>
      </div>

      <div className="field">
        <label htmlFor="password">Password</label>
        <input name="password" type="password"/>
      </div>

      <button className="ui button">Sign Up</button>
    </form>
  );
}

export default RegisterForm;
