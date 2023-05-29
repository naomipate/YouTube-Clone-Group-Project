import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
<nav className="navbar navbar-expand-lg text-bg-danger p-2 font-link">
  <div className="container-fluid">
  <span className="navbar-brand text-light mb-0 h1">Youtube</span>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/' className='text-decoration-none nav-link text-light href="/about"'>Home</Link>
        <Link to='/about' className='text-decoration-none nav-link text-light href="/about"'>About</Link>
      </div>
    </div>
  </div>
</nav>
    )
}