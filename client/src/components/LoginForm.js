import React from 'react';

const LoginForm = () => {
  return (
    <form action="/login" method="POST">
      <input name="username" type="text"/>
      <input name="password" type="password"/>
      <button>Sign In</button>
    </form>
  );
}

export default LoginForm;
