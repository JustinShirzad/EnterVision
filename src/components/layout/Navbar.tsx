import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="/">EnterVision</a>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}