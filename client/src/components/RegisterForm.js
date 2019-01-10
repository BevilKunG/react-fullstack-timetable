import React from 'react';

const RegisterForm = () => {
  return(
    <form action="/register" method="POST">
      <label htmlFor="username">Username</label>
      <input name="username" type="text"/>
      <label htmlFor="password">Password</label>
      <input name="password" type="password"/>
      <button>Sign Up</button>
    </form>
  );
}

export default RegisterForm;
