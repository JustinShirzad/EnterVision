import Link from "next/link";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>EnterVision</h3>
                        <p>Something Something... Cool catchphrase.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <p>Email: amongusssws</p>
                        <p>Phone: 000</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 EnterVision. No rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}