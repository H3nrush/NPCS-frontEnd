import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';
function Privacy(){
  return(
    <div className='div-login-container'>
      <div className='login-box'>
        <div className='div-privacy'>
        <h1>Before SignUp</h1> <br/>
          <h3>Please for your <strong style={{'color':'red' , 'backgroundColor':'black' , 'paddingRight' : '10px' , 'paddingLeft':'10px'}}>safety</strong> on this website, read these suggestions :</h3>
          <ol>
            <li>
              1 - Never use your personal information to register and always remain anonymous.
            </li>
            <li>
              2 - Never talk about yourself or your relatives or exact addresses related to you or your relatives in the comments and do not exchange any information about yourself or your relatives.
            </li>
            <li>
              3 - Be careful with your account information on this website because we do not use support emails for our own security. That's why you have to register with a strong username and password, we won't even ask for your address or any additional information.
            </li>
            <li>
              4 - Remember that if you forget your username or password, you need the exact date of your account creation to recover it. Even its seconds and minutes.
            </li>
            <li>
              5 - When your registration is done successfully, you will see the exact date of your account creation in a green box. Remember them well or write them down somewhere so that you can retrieve them if you forget your information.
            </li>
            <li>
              6 - If you delete your account, don't forget that your account will be completely deleted from our database and will never be recovered, so don't forget not to do this without deciding.
            </li>
            <li>
              7 - If there is a problem, please contact the admins with an anonymous email.
            </li>
          </ol>
          <div className='btn-box'> 
          <Link className='ag-des reject' to="/">Reject</Link>
          <Link className='ag-des accept' to="/SignUp">Accept</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Privacy;