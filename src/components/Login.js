import React from 'react'

export default function Login() {
    return (
    <div className="wrapper ">
     <div id="formContent">
    <div >
      <h3 style={{padding:'10px'}}>Login</h3>
    </div>

   
    <form>
      <input type="text" id="login"  name="login" placeholder="username" required/>
      <input type="text" id="password"  name="login" placeholder="password" required/>
      <input type="submit"  value="Log In"/>
    </form>

  
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
    )
}
