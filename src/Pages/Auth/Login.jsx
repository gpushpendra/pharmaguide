import React from 'react'

const Login = () => {
  return (
<div class="container w-50 bg-light p-5 mt-4">
<div class="container mt-5">
      <h1 class="mb-4">Login</h1>
      <form method="post" action="/signup">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" required/>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" required/>
        </div>
        
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <div class="mt-4">
        <a href="/login">Forget Pasword!</a>
      </div>
    </div>
    </div>
  )
}

export default Login;
