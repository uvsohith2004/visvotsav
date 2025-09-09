// Layout.js
import Navbar from '@/components/navbar';
import { useRef } from 'react';
import { Outlet} from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/footer';
// import CountdownTimer from '@/components/timer';
import { Toaster } from '@/components/ui/toaster';

gsap.registerPlugin(ScrollTrigger);
const MainLayout = () => {


  // Scroll to section on click

  return (
    <div>
      <header>
      <Navbar />
      </header>

      <main >
        <Outlet />
      </main>

      <footer >
        <Footer/>
      </footer>
   
      {/* <CountdownTimer/> */}
    </div>
  );
};

export default MainLayout;
 