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
                        <Link href="/dashboard" className="nav-link">DashBoard</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}