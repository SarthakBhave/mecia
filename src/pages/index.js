import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import HeroSection from "../components/1. HeroSection";
import InfoSection from "../components/2. InfoSection";
import Schedule from '../components/3. Schedule';
import ProblemStatements from "../components/4. ProblemStatements";
import Prizes from "../components/5. Prizes";
import Footer from '../components/10. Footer';

import { homeObjOne } from '../components/2. InfoSection/Data';
import Sponsors from '../components/6. Sponsors';
import Judges from '../components/7. Judges';
import FAQs from '../components/8. FAQs';
import Team from '../components/9. Team';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Schedule />
            <ProblemStatements />
            <Prizes />
            <Sponsors />
            <Judges />
            <FAQs />
            <Team />
            <Footer />
        </>
    )
}

export default Home
