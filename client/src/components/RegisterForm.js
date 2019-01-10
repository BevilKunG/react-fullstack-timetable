import React from 'react';

const RegisterForm = () => {
  return(
    <form action="/register" method="POST">
      <input name="username" type="text"/>
      <input name="password" type="password"/>
      <button>Sign Up</button>
    </form>
  );
}

export default RegisterForm;
