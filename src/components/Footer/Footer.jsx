import './Footer.scss'
import footerLogo  from '../../assets/images/Bluenode-logo.svg'
import footertwitterLogo  from '../../assets/images/footer social icon.svg'
import footertelegramLogo  from '../../assets/images/footer telegram logo.svg'


function Footer() {
  return (
    <div class="footer" gsap="group">
    <div class="container container-large">
      <div class="footer_shadow"></div>
      <div class="footer-wrapper" reveal="frombottom">
        <a href="#" class="footer-logo w-inline-block"><img src={footerLogo} loading="lazy" alt=""></img></a>
        <div class="footer-desc-wrap">
          <p>Become Part of the Next Big Thing. Join Us.</p>
        </div>
        <div class="social_wrapper">
          <a href="#" class="social_link w-inline-block">
            <div class="social-icon-holder">
              <div class="social-icon "><img src={footertwitterLogo} alt="" /></div>
            </div>
          </a>
          <a href="#" class="social_link w-inline-block">
            <div class="social-icon-holder">
              <div class="social-icon "><img src={footertelegramLogo} alt="" /></div>
            </div>
          </a>
        </div>
      </div>
   <div class="footer-menu-wrap" reveal="frombottom">
        <a href="#" class="footer-link">Tokenomics</a>
        <a href="#" class="footer-link">NodePaper</a>
        <a href="#" class="footer-link">Privacy Policy</a>
        <a href="#" class="footer-link">Terms &amp; Conditions</a>
        <a href="#" class="footer-link">Roadmap</a>
      </div> 
      <div class="copyright-text" reveal="frombottom" >Copyright© 2024 BlueNode. All rights reserved</div>
    </div>
  </div>
  )
}

export default Footer