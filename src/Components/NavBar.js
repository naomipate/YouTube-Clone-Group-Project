import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
<nav class="navbar navbar-expand-lg text-bg-danger p-2">
  <div class="container-fluid">
  <span class="navbar-brand text-light mb-0 h1">Youtube</span>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to='/' className='text-decoration-none'><a className="nav-link text-light" href="/about">Home</a></Link>
        <Link to='/about' className='text-decoration-none'><a className="nav-link text-light" href="/about">About</a></Link>
      </div>
    </div>
  </div>
</nav>
    )
}