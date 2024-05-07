import React from 'react'
import { Link } from 'react-router-dom'
import '../../components/Pages/Landingpage/Mainpage.scss'
// import abtbadgeImg from '../../../assets/images/About-Us.svg'
import abtbadgeImg from '../../../src/assets/images/About-Us.svg'
import aboutImg from '../../../src/assets/images/About-Image.svg'
import dividerleftLine from '../../../src/assets/images/Divider-Left-Line.svg'
import rotateGif from '../../../src/assets/images//3dgifmaker62304.gif'
import dividerrightLine from '../../../src/assets/images/Divider-right-line.svg'
// import Hero from '../Hero/Hero.jsx'

function About() {
    return (
        <div>
            {/* <Hero /> */}
            <section id="about-us" class="sec_about">
                <div class="container container-large">
                    <div class="about-grid">
                        <div id="w-node-_1409d404-d36d-447d-af6f-c675ecbd639b-ab90d4da" class="grid_item">
                            <div data-w-id="5eab0ea4-3b5c-6088-ae95-5162eea5f83e" class="about-content">
                                <div class="about-badge"><img src={abtbadgeImg} loading="lazy" alt="Section Tag"></img></div>
                                <h2 class="heading-style-h2">The Breakfast of the Champions</h2>
                                <div class="about-wrap">
                                    <p class="text-size-regular">BlueNode is a carefully designed residential proxy solution that transforms your unused internet bandwidth into passive cryptocurrency income. </p>
                                    <div class="about-tag">
                                        <div class="about-tag-wrapper">
                                            <div>1 GB Shared = 200 BLU Tokens </div>
                                        </div>
                                    </div>
                                    <p class="text-size-regular">Why BlueNode - Because we make it possible for you to wake up each morning and find your wallet loaded with 1600 to 3200 BLU Tokens, equivalent to a daily value of <span class="gradient_text">$40 - $80 </span>– all earned effortlessly while you sleep.</p>
                                    <div class="about_btn-wrap">
                                        <Link to="/buy-page" class="secoundry-button w-inline-block">
                                            <div class="button_inner-wrap">
                                                <div>Join Presale</div>
                                            </div>
                                        </Link>
                                        <a href="#" class="secoundry-button w-inline-block">
                                            <div class="button_inner-wrap">
                                                <div>Read NodePaper</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid_item">
                            <div class="about_img-wrap"><img src={aboutImg} loading="lazy" data-w-id="89741d19-0f80-5148-d39f-4e878da0b839" alt="About us Image" class="about-img"></img></div>
                        </div>
                    </div>
                    <div class="about_bg-shadow"></div>
                    <div class="about_bg-shadow is_3mob"></div>
                </div>
                <div class="section_divider">
                    <div class="sec_left-divider"><img src={dividerleftLine} loading="lazy" alt="" class="divider_line"></img></div><img src={rotateGif} loading="lazy" alt="" class="rotate-gif"></img>
                    <div class="sec_right-divider"><img src={dividerrightLine} loading="lazy" alt="" class="divider_line"></img></div>
                </div>
            </section>
        </div>
    )
}

export default About