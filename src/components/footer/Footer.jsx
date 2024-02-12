import './footer.css'

const Footer = () => {
  const handleContactUsClick = () => {
  const subject = encodeURIComponent('Inquiry');
  const body = encodeURIComponent('Good day,\n\nI would like to inquire about...');

  const mailtoLink = `mailto:eduproeduproconnect@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="left-section">
            <div className="eduFoot">
                <h3>EduProConnect</h3>
            </div>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">X</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>
        <div className="right-section">
          <h3>Get in Touch</h3>
          <p onClick={handleContactUsClick}>Email: eduproeduproconnect@gmail.com</p>
        </div>
      </div>
      <div className="develop">
        <p><a href="https://github.com/danielSuperOhh">Developed by iPlayDaniel</a></p>
      </div>
    </footer>
  );
};

export default Footer;
