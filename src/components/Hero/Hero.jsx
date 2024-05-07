import React from 'react'
import herobgImg from '../../../src/assets/images/hero-bg-img.svg'
import headermainImage from '../../../src/assets/images/Header-Main-Image.svg'
import lpbadgeIcon from '../../../src/assets/images/lpbadge-icon.svg'
import '../Pages/Landingpage/Mainpage.scss'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div>
            <section class="sec_hero">
                <div class="container container-large">
                    <div class="hero-wrapper">
                        <h1 data-w-id="00e57a4b-fffa-ad9f-94ce-489ff395655f" class="heading-style-h1">Turn Your Unused Internet Into Crypto Treasure! Earn <span class="gradient_text">BLU Tokens</span> for Every GB Shared!</h1>
                        <div data-w-id="47b978bd-a9e1-d4d2-8349-d4cbbb53a7c4" class="hero_btn-wrap wrap">
                            <div class="hero-tag">
                                <div class="hero-tag-wrapper">
                                    <div>Presale Price: $0.005</div>
                                </div>
                            </div>
                            <div class="hero-tag">
                                <div class="hero-tag-wrapper">
                                    <div>Listing Price</div>
                                    <div class="hero-btn-content">
                                        <div>(500%</div>
                                        <div class="colorbtn-icon">
                                            <img src={lpbadgeIcon} alt="" />
                                            <svg width="100%" height="100%" viewbox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.36103 6.67836L6.98914 4.21461L1.2844 10.0123L0.5 9.24112L6.99739 2.63757L9.39238 5.12497L13.5124 1.17989L12.3319 0H15.414V3.08092L14.2902 1.95769L9.36103 6.67836ZM3.22943 14.7143H6.94238V9.48865H3.22943V14.7143ZM8.38631 14.7143H12.0993V7.83845H8.38631V14.7143ZM13.5432 4.40053V14.7143H17.2561V4.40053H13.5432Z" fill="url(#paint0_linear_278_3420)"></path>
                                                <defs>
                                                    <lineargradient id="paint0_linear_278_3420" x1="8.87807" y1="0" x2="8.87807" y2="14.7143" gradientunits="userSpaceOnUse">
                                                        <stop stop-color="#00F981"></stop>
                                                        <stop offset="1" stop-color="#0056FB"></stop>
                                                    </lineargradient>
                                                </defs>
                                            </svg></div>
                                        <div>):</div>
                                    </div>
                                    <div>$0.025</div>
                                </div>
                            </div>
                        </div>
                        <div data-w-id="97a9aa83-e26a-91bd-2f2e-716c341aea24" class="hero_desc-wrap">
                            <p class="text-size-regular-20">Not everyone surfs the web for 24 hours a day, so there’s plenty of internet that you pay for in full, but aren’t using at any given time. What happens to the unused bandwidth? Nothing. This is where BlueNode comes into the spotlight.</p>
                        </div>
                        <div data-w-id="d6fab5df-d2c0-5ef1-8063-20a63d6d46aa" class="hero_btn-wrap">
                            <Link to="/buy-page" class="secoundry-button w-inline-block">
                                <div class="button_inner-wrap secoundry">
                                    <div>Join Presale</div>
                                </div>
                            </Link>
                            <Link to="#" class="secoundry-button w-inline-block">
                                <div class="button_inner-wrap secoundry">
                                    <div>Read NodePaper</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div data-w-id="e38c8dfb-f3b9-faea-c35a-3c7fd6b1c5c6" class="hero-img-wrap"><img src={headermainImage} loading="lazy" alt="Hero Main Image"></img></div>
                    <div class="hero-bg"><img src={herobgImg} loading="lazy" alt="hero Background Image"></img></div>
                    <div class="h-top-shadow"></div>
                    <div class="h-top-shadow _2"></div>
                </div>
            </section>
        </div>
    )
}

export default Hero 