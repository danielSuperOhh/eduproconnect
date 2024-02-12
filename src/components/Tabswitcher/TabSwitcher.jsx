import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './tabSwitcher.css'

const TabSwitcher = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Tab1Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M18.47 2h-4c-1.492 0-2.726 1.286-2.96 2.752-.043.273.185.498.46.498h4.5c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h2.31c.41 0 .75.34.75.75s-.34.75-.75.75h-2.31a.5.5 0 0 0-.5.5v1.455a.5.5 0 0 0 .496.5l4.505.045c.42 0 .75.34.75.76-.01.41-.34.74-.75.74h-.01l-4.485-.045a.5.5 0 0 0-.505.5v1.545a.5.5 0 0 0 .5.5h3.4a.749.749 0 1 1 0 1.5h-3.4c-.276 0-.504.225-.46.498.233 1.466 1.467 2.752 2.96 2.752h4c1.65 0 3-1.34 3-3V5c0-1.66-1.35-3-3-3ZM8.44 4.95v.8a.5.5 0 0 1-.5.5H3.03a.5.5 0 0 1-.5-.5v-.8C2.53 3.33 3.86 2 5.49 2c1.62 0 2.95 1.33 2.95 2.95ZM2.53 17.91c0 .45.19 1.14.43 1.52l.81 1.36c.95 1.58 2.49 1.58 3.43 0l.82-1.36c.23-.38.42-1.07.42-1.52V8.25a.5.5 0 0 0-.5-.5H3.03a.5.5 0 0 0-.5.5v9.66Z" fill="#697689"></path></svg>
  );

  const Tab2Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M22 4.85v11.89c0 .97-.79 1.86-1.76 1.98l-.31.04c-1.64.22-3.95.9-5.81 1.68-.65.27-1.37-.22-1.37-.93V5.6c0-.37.21-.71.54-.89 1.83-.99 4.6-1.87 6.48-2.03h.06c1.2 0 2.17.97 2.17 2.17ZM10.708 4.71c-1.83-.99-4.6-1.87-6.48-2.03h-.07c-1.2 0-2.17.97-2.17 2.17v11.89c0 .97.79 1.86 1.76 1.98l.31.04c1.64.22 3.95.9 5.81 1.68.65.27 1.37-.22 1.37-.93V5.6a1 1 0 0 0-.53-.89Zm-5.71 3.03h2.25a.749.749 0 1 1 0 1.5h-2.25a.749.749 0 1 1 0-1.5Zm3 4.5h-3a.749.749 0 1 1 0-1.5h3a.749.749 0 1 1 0 1.5Z" fill="#697689"></path></svg>
  );

  const Tab3Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path fill="#697689" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.3 14.69a.763.763 0 01-.99-.39L12 8.85l-1.07 2.4H12c.41 0 .75.34.75.75s-.34.75-.75.75h-1.73L8.69 16.3a.75.75 0 01-1.37-.61l1.31-2.95H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.29l2.02-4.55c.24-.54 1.13-.54 1.37 0l4 9c.17.38 0 .83-.38 1z"></path></svg>
  );

  return (
    <Box sx={{ width: '100%' }} >
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab icon ={<Tab1Icon/>} style={{ backgroundColor: '#fbdf72' }}  className='tab1'/>
        <Tab icon ={<Tab2Icon/>} style={{ backgroundColor: '#707eff' }}  className='tab2'/>
        <Tab icon ={<Tab3Icon/>} style={{ backgroundColor: '#f3a1ff' }} className='tab3'/>
      </Tabs>
      <Box className={`content1 ${value === 0 ? 'active' : ''}`} sx={{ backgroundColor: '#fbdf72', p: 3, display: value === 0 ? 'block' : 'none' }}>
            <div className="point1">
                <h1>What is EduProConnect?</h1>

                <p>
                    EduProConnect is an Edutech startup that provides a comprehensive platform connecting
                    students with educators for personalized learning experinces.
                </p>
            </div>

            <div className="point1">
                <h1>How does EduProConnect ensure the quality of educators?</h1>

                <p>We rigorously vet educators through a thorough screening process, considering 
                    their qualifications, experience, and teching methods. Student feedback is also
                    actively monitored to maintian high standards.
                </p>
            </div>

            <div className="point1">
                <h1>What is the pricing model for EduProConnect?</h1>

                <p>
                    EduProConnect offers flexibles pricing plans, allowing students to choose options that
                    best fit their budget and learning needs.
                </p>
            </div>
       </Box>
       <Box className={`content2 ${value === 1 ? 'active' : ''}`} sx={{ backgroundColor: '#707eff', p: 3, display: value === 1 ? 'block' : 'none' }}>
            <div className="point1">
                <h1>What subjects and level does EduProConnect cover?</h1>

                <p>
                    EduProConnect offers a diverse range of subjects and caters to various
                    educational levels, from elemtary to higher education and beyond.
                </p>
            </div>

            <div className="point1">
                <h1>How can I find an educator that suits my learning needs?</h1>

                <p>
                    Our platform utilizes advanced algorithms to match students with educators based
                    on their perferences, learning styles, and subject requirements.
                </p>
            </div>

            <div className="point1">
                <h1>Can i access recorded sessions for later review?</h1>

                <p>
                    Yes, EduProConnect provides the option for students to access recorded sessions,
                    facilitating review and reinforcement of learned material.
                </p>
            </div>

        </Box>
        <Box className={`content3 ${value === 2 ? 'active' : ''}`} sx={{ backgroundColor: '#f3a1ff', p: 3, display: value === 2 ? 'block' : 'none' }}>
            <div className="point1">
                <h1>How are sessions conducated on EduProConnect?</h1>

                <p>
                    Educators and students can engage in live, interactive sessions through our
                    user-friendly virtual classroom interface, ensuring a seamless learning experience.
                </p>
            </div>

            <div className="point1">
                <h1>Is EduProConnect suitable for group learning?</h1>

                <p>
                    Yes, EduProConnect supports both one-on-one sessions and group learning, providing
                    flexibility for students and educators to choose their preferred mode.
                </p>
            </div>

            <div className="point1">
                <h1>How do payments work on EduProConnect?</h1>

                <p>
                    Payments are processed securely through our platform, providing a transparent and 
                    efficient transaction process for both educators and students.
                </p>
            </div>

        </Box>
    </Box>
  );
};

export default TabSwitcher;
