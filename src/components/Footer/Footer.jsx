import './Footer.scss'
import footerLogo  from '../../assets/images/Bluenode-logo.svg'
import footertwitterLogo  from '../../assets/images/footer social icon.svg'
import footertelegramLogo  from '../../assets/images/footer telegram logo.svg'

function Footer() {
  return (
    <div className="footer" gsap="group">
    <div className="container container-large">
      <div className="footer_shadow"></div>
      <div className="footer-wrapper" reveal="frombottom">
        <a href="#" className="footer-logo w-inline-block"><img src={footerLogo}  alt=""></img></a>
        <div className="footer-desc-wrap">
          <p>Become Part of the Next Big Thing. Join Us.</p>
        </div>
        <div className="social_wrapper">
          <a href="#" className="social_link w-inline-block">
            <div className="social-icon-holder">
              <div className="social-icon "><img src={footertwitterLogo} alt="" /></div>
            </div>
          </a>
          <a href="#" className="social_link w-inline-block">
            <div className="social-icon-holder">
              <div className="social-icon "><img src={footertelegramLogo} alt="" /></div>
            </div>
          </a>
        </div>
      </div>
   <div className="footer-menu-wrap" reveal="frombottom">
        <a href="#" className="footer-link">Tokenomics</a>
        <a href="#" className="footer-link">NodePaper</a>
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="#" className="footer-link">Terms &amp; Conditions</a>
        <a href="#" className="footer-link">Roadmap</a>
      </div> 
      <div className="copyright-text" reveal="frombottom" >Copyright© 2024 BlueNode. All rights reserved</div>
    </div>
  </div>
  )
}

export default Footer