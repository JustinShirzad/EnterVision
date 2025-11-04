import NavBar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import '@/components/webpages/HomePage.css';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <h1>Bing Chilling</h1>
      </main>
      <Footer />
    </>
  );
}