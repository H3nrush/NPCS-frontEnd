import { Link } from "react-router-dom";

function Header(){
  return(
    <header className="home-header">
      <nav className="navbar">
       <div>
       <ul>
          <li><Link className="btn-header" to="/">Home</Link></li>
          <li><Link className="btn-header" to="/Login" >Login</Link></li>
          <li><Link className="btn-header" to="">About</Link></li>
        </ul>
       </div>
      </nav>
    </header>
  )
}
export default Header;
