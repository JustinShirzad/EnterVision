import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <Image src="/logo/EnterVision_logo.png" alt="EnterVision Logo" width={120} height={40} />
                    <a href="/">EnterVision</a>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/dashboard" className="nav-link">DashBoard</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/analytics" className="nav-link">Analytics</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/team" className="nav-link">Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/login" className="nav-link">Log In</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}