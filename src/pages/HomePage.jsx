import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import Work from "../components/work/Work";
import AboutSection from "../components/about/AboutSection";
import TeamSection from "../components/team/TeamSection";
import NumbersSection from "../components/numbers/NumberSection";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";

function HomePage() {

    return (

        <>

            <Navbar />

            <main>

                <HeroSection />

                <Work />

                <AboutSection />

                <TeamSection />

                <NumbersSection />

                <ContactSection />

            </main>

            <Footer />

        </>

    );

}

export default HomePage;