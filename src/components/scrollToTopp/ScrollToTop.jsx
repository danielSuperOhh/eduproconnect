import './scrollToTop.css'
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setIsVisible(scrollTop > 100);
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
  return (
    <div className={`scroll-to ${isVisible ? 'visible' : ''}` }onClick={scrollToTop} >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path fill="#d9e3f0" d="M9.33 18h5.34c3.32 0 4.67-2.35 3.02-5.22l-.74-1.28c-.18-.31-.51-.5-.87-.5H7.92c-.36 0-.69.19-.87.5l-.74 1.28C4.66 15.65 6.01 18 9.33 18zM8.792 9.999h6.43c.39 0 .63-.42.43-.75l-.64-1.1c-1.65-2.87-4.37-2.87-6.02 0l-.64 1.1c-.19.33.05.75.44.75z"></path></svg>    
    </div>
  )
}

export default ScrollToTop