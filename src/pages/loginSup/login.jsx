import { Link } from 'react-router-dom';
import './style.css';
function Login(){
  return(
    <div className='div-login-container'>
      <div className='login-box'>
      <span className='answer-login'>login succesful!</span>
      
      <span className='goto-signup'>You don't have an account? click to <Link to="/Privacy" className='btn-goto'>SignUp</Link></span>
      <form className='form'>
    <label className='label'>
           Username:
          <input className='input-login' type='text' name='username' placeholder='ex : npcs'/>
        </label>
        <label className='label'>
          Password:
          <input className='input-login' type='password' name='password' placeholder='ex : 1234'/>
        </label>
        <input type='submit' className='submit' value="Login"/>
    </form>
      </div>
    </div>
  )
}
export default Login;