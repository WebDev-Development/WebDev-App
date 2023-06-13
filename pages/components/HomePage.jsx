import Banner from './Banner';
import About from './About';
import Services from './Services';
import Contact from './Contact';

export default function HomePage() {

  return (
    <div className="bg-black text-white flex flex-col">
      <Banner />
      <Services />
      <About />
      <Contact />
    </div>
  ) 
}