import { garamont } from '@/app/font';

import Link from "next/link";

function Navbar() {
  return (
    <div className= {`${garamont.className} antialiased`}>
    <nav className= "navbar navbar-expand-lg bg-light" data-bs-theme="light" >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <img className="logo" src="logo.svg" alt="logo"/>
        </Link>
        

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/spotify">
                Spotify
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
export default Navbar