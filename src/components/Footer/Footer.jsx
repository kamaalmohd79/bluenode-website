import './Footer.scss'
import footerLogo from '../../assets/images/Bluenode-logo.svg'
import footertwitterLogo from '../../assets/images/footer social icon.svg'
import footertelegramLogo from '../../assets/images/footer telegram logo.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer" gsap="group">
      <div className="container container-large">
        <div className="footer_shadow"></div>
        <div className="footer-wrapper" >
          <span className="footer-logo w-inline-block"><img src={footerLogo} alt=""></img></span>
          <div className="footer-desc-wrap">
            <p>Become Part of the Next Big Thing. Join Us.</p>
          </div>
          <div className="social_wrapper">
            <button className="social_link w-inline-block">
              <div className="social-icon-holder">
                <div className="social-icon "><img src={footertwitterLogo} alt="" /></div>
              </div>
            </button>
            <button className="social_link w-inline-block">
              <div className="social-icon-holder">
                <div className="social-icon "><img src={footertelegramLogo} alt="" /></div>
              </div>
            </button>
          </div>
        </div>
        <div className="footer-menu-wrap" >
          <Link to="/#blu" className="footer-link">Tokenomics</Link>
          <span className="footer-link">NodePaper</span>
          <Link to="/privacy-policy-page" className="footer-link">Privacy Policy</Link>
          <Link to="/terms-page" className="footer-link">Terms &amp; Conditions</Link>
          <Link to="/#roaadmap" className="footer-link">Roadmap</Link>
        </div>
        <div className="copyright-text"  >Copyright© 2024 BlueNode. All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer