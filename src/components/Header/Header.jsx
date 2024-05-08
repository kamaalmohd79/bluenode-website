import './Header.scss'
import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/nav-logo.svg'
import btncolorIcon from '../../assets/images/logo-icon-color.svg'
import btnblackIcon from '../../assets/images/logo-icon-black.svg'
import humbergerBtn from '../../assets/images/humberger_menu.svg'
import closeIcon from '../../assets/images/close_icon.png'
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      if (scrollPosition >= 100) {
        document.body.classList.add('page_scrolled');
      } else {
        document.body.classList.remove('page_scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const navClose = () => {
    if (window.innerWidth < 991) {
      setShowMenu(false);
    }
  };

  return (
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
    <div className="container container-large">
      <div data-w-id="59b5d623-6a9d-4e4c-9a00-613a68b6e4bd" className="nav-content">
        <a href="home" className="nav-logo w-nav-brand"><img src={logo}  alt="Nav Logo"></img></a>
        <nav  className={`nav_menu-wrap ${showMenu ? 'show' : ''}`}>
          <div className="nav_menu-holder">
            <div className='navclosebtn' onClick={closeMenu}  ><img alt="" src={closeIcon}/ ></div>
            <Link to="home" aria-current="page" className="nav_link w-nav-link w--current">HOME</Link>
            <Link to="home#about-us" onClick={navClose}  className="nav_link w-nav-link">ABOUT US</Link>
            <Link to="home#earning" onClick={navClose} className="nav_link w-nav-link">EARNINGS</Link>
            <Link to="home#Steps" onClick={navClose}  className="nav_link w-nav-link">QUICK START</Link>
            <Link to="home#usp" onClick={navClose} className="nav_link w-nav-link">USP</Link>
            <Link to="home#roaadmap" onClick={navClose} className="nav_link w-nav-link">ROADMAP</Link>
            <Link to="home#faq" onClick={navClose} className="nav_link w-nav-link">FAQs</Link>
            <div className="nav-btn-wrap">
              <a href="/buy-page" id="navbuybtn" onClick={navClose} className="secoundry-button w-inline-block">
                <div className="button_inner-wrap">
                  <div className="blackbtn-icon"> <img src={btnblackIcon} alt="" /></div>
                  <div className="colorbtn-icon "><img src={btncolorIcon } alt="" /></div>
                  <div className="btn-text">BUY $BLU</div>
                </div>
              </a>
            </div>
            {/* <div className="menu-button close w-nav-button">
              <div className="nav_menu-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentcolor" viewbox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                </svg></div>
            </div> */}
            </div>
          </nav>
          <div className="menu-button w-nav-button" id="navclosebtn" onClick={toggleMenu}>
            <img src={humbergerBtn} alt="" />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Header