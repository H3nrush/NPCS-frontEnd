import { Link } from "react-router-dom";

function SignUp(){
  return(
    <div className='div-login-container'>
      <div className='login-box'>
      <span className='answer-login'>You have successfully created an account ;)</span>
      
      <span className='goto-signup'>You already have an account? click to <Link to="/login" className='btn-goto'>Login</Link></span>
      <form>
        <label>
          
        </label>
      </form>
      </div>
    </div>
  )
}
export default SignUp;