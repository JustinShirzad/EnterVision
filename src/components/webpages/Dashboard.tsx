import NavBar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/components/webpages/Dashboard.css';

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <main>
        <h1>This is Dashboard</h1>
      </main>
      <Footer />
    </>
  );
}