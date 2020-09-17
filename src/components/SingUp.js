import React from 'react'

function SingUp() {
    return (
        <div className="wrapper ">
        <div id="formContent">
       <div >
         <h3 style={{padding:'10px'}}>Sign Up</h3>
       </div>
   
      
       <form>
         <input type="text"  name="signup" placeholder="username" required/>
         <input type="text"   name="district" placeholder="district" required/>
         <input type="text"   name="mobile number" placeholder="mobile number" required/>
         <input type="text"   name="signup" placeholder="password" required/>
         <input type="submit"  value="Sign Up"/>
       </form>
   
     
       
   
     </div>
   </div>
    )
}

export default SingUp
