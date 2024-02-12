import TabSwitcher from '../Tabswitcher/TabSwitcher'
import './section3.css'

const Section3 = () => {
  return (
    <div className='section3'>
        <div className="section3head">
            <h1>FAQs </h1>
            <h1><span className='easy'>Commonly asked questions about eduProconnect</span></h1>
        </div>

        <TabSwitcher/>
    </div>
  )
}

export default Section3