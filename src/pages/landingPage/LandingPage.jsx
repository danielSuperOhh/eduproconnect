import Section3 from '../../components/Section3/Section3'
import TabSwitcher from '../../components/Tabswitcher/TabSwitcher'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Section1 from '../../components/section1/Section1'
import Section2 from '../../components/section2/Section2'
import ScrollToTop from '../../components/scrollToTopp/ScrollToTop'
import './landingPage.css'
import Section4 from '../../components/section4/Section4'
import Footer from '../../components/footer/Footer'

const LandingPage = () => {
  return (
    <div className='landingPage'>
        <div className="landing">
            <Navbar/>
            <Hero/>
        </div>
        <Section1/>
        <Section2/>
        <Section4/>
        <Section3/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default LandingPage