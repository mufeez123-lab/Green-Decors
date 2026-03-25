import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects"
import Stats from "../components/Stats"
import Services from "../components/Services"

import Testimonials from "../components/Testimonials";

function HomePage(){
    return(
        <>

        <Hero/>
        <Projects/>
        <Stats/>
        <Services/>
            <Testimonials/>

    
        </>
    )
}

export default HomePage;