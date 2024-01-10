import Link from "next/link";
import { LuHeadphones, LuHeart, LuLogIn } from "react-icons/lu"; //icono

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img className="logo" alt="Logo" src="./logo.svg" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/favoritos">
                <LuHeart /> Favoritos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/spotify">
                <LuHeadphones className="w-5 h-5" />
                Spotify
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                <LuLogIn /> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

