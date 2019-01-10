import React from 'react';

const LoginForm = () => {
  return (
    <form action="/login" method="POST">
      <label htmlFor="username">Username</label>
      <input name="username" type="text"/>
      <label htmlFor="password">Password</label>
      <input name="password" type="password"/>
      <button>Sign In</button>
    </form>
  );
}

export default LoginForm;
