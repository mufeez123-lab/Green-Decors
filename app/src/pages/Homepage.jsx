import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects"
import Stats from "../components/Stats"
import Services from "../components/Services"
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Testimonials from "../components/Testimonials";

function HomePage(){
    return(
            <HelmetProvider>
      <Helmet>
          <title>Green Decors</title>
          <meta name="description" content="green decors, interior design, interiro design puttur" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <>

        <Hero/>
        <Projects/>
        <Stats/>
        <Services/>
            <Testimonials/>

    
        </>
         </HelmetProvider>
    )
}

export default HomePage;