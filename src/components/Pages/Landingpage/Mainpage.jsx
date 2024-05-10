import React, { useEffect, useRef } from 'react'
import './Mainpage.scss'


import { Link, useLocation } from 'react-router-dom';
import FAQPage from '../../../components/Faqs/Faqpage.jsx';
import headermainImage from '../../../assets/images/Header-Main-Image.svg'
import abtbadgeImg from '../../../assets/images/About-Us.svg'
import herobgImg from '../../../assets/images/hero-bg-img.svg'
import dividerleftLine from '../../../assets/images/Divider-Left-Line.svg'
import rotateGif from '../../../assets/images/3dgifmaker62304.gif'
import dividerrightLine from '../../../assets/images/Divider-right-line.svg'
import aboutImg from '../../../assets/images/About-Image.svg'
import earningImg from '../../../assets/images/Earning.svg'
import miningrigsrequired from '../../../assets/images/NO-Mining-Rigs-Required.svg'
import wrongImg from '../../../assets/images/Wrong.svg'
import endmachineImg from '../../../assets/images/NO-High-End-Machine.svg'
import learningImg from '../../../assets/images/NO-Learning-Required.svg'
import stableImg from '../../../assets/images/Stable-Internet-Connection.svg'
import earningverifiedImg from '../../../assets/images/Earning-Verified.svg'
import pcorlaptopImg from '../../../assets/images/Regular-PC-or-Laptop.svg'
import idextensionImg from '../../../assets/images/BlueNode-ID--Extension.svg'
import upImg from '../../../assets/images/up--up.svg'
import smartdistributionImg from '../../../assets/images/Smart-Distribution.svg'
import buybackburnImg from '../../../assets/images/Buyback--Burn.svg'
import stakingmultiplierImg from '../../../assets/images/Staking-Multiplier.svg'
import instantconversionImg from '../../../assets/images/Instant-Conversion.svg'
import rankingmechanismImg from '../../../assets/images/Ranking-Mechanism.svg'
import technologyTag from '../../../assets/images/technology.svg'
import metamasklogoImg from '../../../assets/images/metamask-logo.png'
import walletconnectLogo from '../../../assets/images/wallet-connect-logo.svg'
import trustwalletLogo from '../../../assets/images/trust-wallet-logo.svg'
import awsLogo from '../../../assets/images/aws-logo.svg'
import googleLogo from '../../../assets/images/google-logo.svg'
import openAi from '../../../assets/images/open-Ai.svg'
import githubLogo from '../../../assets/images/Github.svg'
import telegramLogo from '../../../assets/images/telegram.svg'
import solanaLogo from '../../../assets/images/solana-logo.svg'
import coinmarketLogo from '../../../assets/images/CoinMarket.svg'
import coingeckoLogo from '../../../assets/images/CoinGecko.svg'
import mysqlLogo from '../../../assets/images/MySQL.svg'
import reactLogo from '../../../assets/images/React.svg'
import figmaLogo from '../../../assets/images/Figma.svg'
import googleanalyticsLogo from '../../../assets/images/Google-Analytics.svg'
import ledgerLogo from '../../../assets/images/Ledger.svg'
import bIcon from '../../../assets/images/B-Icon.svg'
import twitterImg from '../../../assets/images/twitter.png'
import telegramsocialmediaLogo from '../../../assets/images/telegram-social-Media.png'
import facebookLogo from '../../../assets/images/Facebook.png'
import roboLogo from '../../../assets/images/Robo.png'
import whatsappLogo from '../../../assets/images/Whatsapp.png'
import bluImg from '../../../assets/images/Blu.svg'
import tokenomics1Img from '../../../assets/images/Tokenomics-1.svg'
import mobiletokenomicsLogo from '../../../assets/images/mobile-tokenomics.svg'
import faqTag from '../../../assets/images/Faq.svg'
import shareGif from '../../../assets/images/3dgifmaker42174-ezgif.com-crop.gif'
import lpbadgeIcon from '../../../assets/images/lpbadge-icon.svg'
import Roadmap from '../../Roadmap/Roadmap.jsx';
import Steps from '../../Steps/Steps.jsx';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);



function Mainpage() {

  useGSAP(() => {
   

    gsap.utils.toArray(".section-tag").forEach(sectionTag=>{
      gsap.fromTo(sectionTag,{
        y:200,
        opacity:0,
      },{
        y:0,
        opacity:1,
        rotation:0,
        duration:0.5,
        delay:0,
        scrollTrigger: {
          trigger: sectionTag,
          start: 'top bottom-=20%',
          end: 'bottom center+=20%',
          // markers:{startColor: "yellow", endColor: "yellow"}
        }
      })
    })

    gsap.utils.toArray("h2").forEach(h2=>{
      gsap.fromTo(h2,{
        y:200,
        opacity:0,
      },{
        y:0,
        opacity:1,
        rotation:0,
        duration:0.5,
      
        scrollTrigger: {
          trigger: h2,
          start: 'top bottom-=25%',
          end: 'bottom center+=25%',
          // markers:{startColor: "green", endColor: "green"}
        
        },
       
      })
    })

    gsap.utils.toArray("[contentwrap]").forEach(contentwrap=>{
      gsap.fromTo(contentwrap,{
        y:200,
        opacity:0,
      },{
        y:0,
        opacity:1,
        rotation:0,
        duration:0.5,
        
       
        // scrollTrigger:contentwrap,
        scrollTrigger: {
          trigger: contentwrap,
          start: 'top bottom-=30%',
          end: 'bottom center+=30%',
          // markers:true,
        
        },
        
        
      })
    })
 
  });





  const location = useLocation();
  const lastHash = useRef("")
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }
    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 200);
    }
  }, [location]);


  return (
    <div>
      <div className="main-wrapper" id="homepage">
        <div className="overflow-x-clip">
          <section gsap="group" className="sec_hero">
            <div className="container container-large">
              <div className="hero-wrapper">
                <h1 reveal="frombottom" className="heading-style-h1">Turn Your Unused Internet Into Crypto Treasure! Earn <span className="gradient_text">BLU Tokens</span> for Every GB Shared!</h1>
                <div reveal="frombottom" className="hero_btn-wrap wrap">
                  <div className="hero-tag">
                    <div className="hero-tag-wrapper">
                      <div>Presale Price: $0.005</div>
                    </div>
                  </div>
                  <div className="hero-tag">
                    <div className="hero-tag-wrapper">
                      <div>Listing Price</div>
                      <div className="hero-btn-content">
                        <div>(500%</div>
                        <div className="colorbtn-icon">
                          <img src={lpbadgeIcon} alt="" />
                          <svg width="100%" height="100%" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div reveal="frombottom" className="hero_desc-wrap">
                  <p className="text-size-regular-20">Not everyone surfs the web for 24 hours a day, so there’s plenty of internet that you pay for in full, but aren’t using at any given time. What happens to the unused bandwidth? Nothing. This is where BlueNode comes into the spotlight.</p>
                </div>
                <div reveal="frombottom" className="hero_btn-wrap">
                  <a href="/buy-page" className="secoundry-button w-inline-block">
                    <div className="button_inner-wrap secoundry">
                      <div>Join Presale</div>
                    </div>
                  </a>
                  <button className="secoundry-button w-inline-block">
                    <div className="button_inner-wrap secoundry">
                      <div>Read NodePaper</div>
                    </div>
                  </button>
                </div>
              </div>
              <div reveal="frombottom" className="hero-img-wrap"><img src={headermainImage} alt="Hero Main"></img></div>
              <div className="hero-bg"><img src={herobgImg} alt="hero Background"></img></div>
              <div className="h-top-shadow"></div>
              <div className="h-top-shadow _2"></div>
            </div>
          </section>

          <section id="about-us" className="sec_about" gsap="group">
            <div className="container container-large">
              <div className="about-grid">
                <div reveal="frombottom" className="grid_item">
                  <div className="about-content">
                    <div className="about-badge"><img src={abtbadgeImg} alt="Section Tag"></img></div>
                    <h2 className="heading-style-h2">The Breakfast of the Champions</h2>
                    <div className="about-wrap" contentwrap="">
                      <p className="text-size-regular">BlueNode is a carefully designed residential proxy solution that transforms your unused internet bandwidth into passive cryptocurrency income. </p>
                      <div className="about-tag">
                        <div className="about-tag-wrapper">
                          <div>1 GB Shared = 200 BLU Tokens </div>
                        </div>
                      </div>
                      <p className="text-size-regular">Why BlueNode - Because we make it possible for you to wake up each morning and find your wallet loaded with 1600 to 3200 BLU Tokens, equivalent to a daily value of <span className="gradient_text">$40 - $80 </span>– all earned effortlessly while you sleep.</p>
                      <div className="about_btn-wrap">
                        <Link to="/buy-page" className="secoundry-button w-inline-block">
                          <div className="button_inner-wrap">
                            <div>Join Presale</div>
                          </div>
                        </Link>
                        <button className="secoundry-button w-inline-block">
                          <div className="button_inner-wrap">
                            <div>Read NodePaper</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid_item">
                  <div className="about_img-wrap" reveal="grow"><img src={aboutImg} alt="About us" className="about-img"></img></div>
                </div>
              </div>
              <div className="about_bg-shadow"></div>
              <div className="about_bg-shadow is_3mob"></div>
            </div>
            <div className="section_divider">
              <div className="sec_left-divider"><img src={dividerleftLine} alt="" className="divider_line"></img></div><img src={rotateGif} alt="" className="rotate-gif"></img>
              <div className="sec_right-divider"><img src={dividerrightLine} alt="" className="divider_line"></img></div>
            </div>
          </section>


          <section id="earning" className="sec_earning"  >
            <div className="container container-large">
              <div className="earning-content" gsap="group">
                <div reveal="frombottom" className="section-title-wrap">
                  <div className="section-tag"><img src={earningImg} alt="Section tag"></img></div>
                  <h2 className="heading-style-h2">How Much I Can Earn</h2>
                </div>
                <div reveal="frombottom" className="earning_desc-wrap" contentwrap="">
                  <p className="text-size-regular">If you continue running the BlueNode for a month, that’s anywhere between <span className="gradient_text">1200 USD to 5000 USD</span> worth of BLU tokens in your wallet.</p>
                </div>
                <div reveal="frombottom" className="earning-grid" contentwrap="">
                  <div id="w-node-_9b526fb6-b49a-2ddc-e15f-6c6287477bce-ab90d4da" className="grid_item">
                    <div className="earning-stroke">
                      <div className="earning_card">
                        <div className="earning_icon-wrap"><img src={miningrigsrequired} alt=""></img></div>
                        <div>NO Mining Rigs Required</div>
                        <div className="earning_check"><img src={wrongImg} alt=""></img></div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-ca43102b-b055-7e8b-238a-6b6a89089739-ab90d4da" className="grid_item">
                    <div className="earning-stroke">
                      <div className="earning_card">
                        <div className="earning_icon-wrap"><img src={endmachineImg} alt=""></img></div>
                        <div>NO High-End Machine</div>
                        <div className="earning_check"><img src={wrongImg} alt=""></img></div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_3ea9838d-169c-9bff-d2b4-17a6d55c56ee-ab90d4da" className="grid_item">
                    <div className="earning-stroke">
                      <div className="earning_card">
                        <div className="earning_icon-wrap"><img src={learningImg} alt=""></img></div>
                        <div>NO Learning Required</div>
                        <div className="earning_check"><img src={wrongImg} alt=""></img></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div reveal="frombottom" className="earning_verified" contentwrap="">
                  <div>All You Need</div>
                </div>
                <div reveal="frombottom" className="earning-grid" contentwrap="" >
                  <div id="w-node-c13fe7b1-b349-f5a6-964b-92d0fddc097b-ab90d4da" className="grid_item">
                    <div className="earning-stroke">
                      <div className="earning_card">
                        <div className="earning_icon-wrap"><img src={stableImg} alt=""></img></div>
                        <div>Stable Internet Connection</div>
                        <div className="earning_check"><img src={earningverifiedImg} alt=""></img></div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-c13fe7b1-b349-f5a6-964b-92d0fddc0984-ab90d4da" className="grid_item">
                    <div className="earning-stroke">
                      <div className="earning_card">
                        <div className="earning_icon-wrap"><img src={pcorlaptopImg} alt=""></img></div>
                        <div>Regular PC or Laptop</div>
                        <div className="earning_check"><img src={earningverifiedImg} alt=""></img></div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-c13fe7b1-b349-f5a6-964b-92d0fddc098d-ab90d4da" className="grid_item">
                    <div className="earning-stroke">
                      <div className="earning_card">
                        <div className="earning_icon-wrap"><img src={idextensionImg} alt=""></img></div>
                        <div>BlueNode ID &amp; Extension</div>
                        <div className="earning_check"><img src={earningverifiedImg} alt=""></img></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="earning_shadow"></div>
            </div>
            <div className="section_divider">
              <div className="sec_left-divider"><img src={dividerleftLine} alt="" className="divider_line"></img></div><img src={rotateGif} alt="" className="rotate-gif"></img>
              <div className="sec_right-divider"><img src={dividerrightLine} alt="" className="divider_line"></img></div>
            </div>
          </section>
        </div>
        <section className="step_wrapper" gsap="group">
          <Steps />
        </section>
        <div className="overflow-x-clip">
          <section id="usp" className="sec_usp">
            <div className="container container-large">
              <div className="usp_shadow"></div>
              <div className="usp_shadow _2"></div>
              <div className="usp_shadow _3"></div>
              <div className="usp_shadow _4"></div>
              <div className="usp-wrap" gsap="group">
                <div className="section-title-wrap" reveal="frombottom">
                  <div className="section-tag"><img src={upImg} alt="Section  tag"></img></div>
                  <h2 className="heading-style-h2">BLU to the Moon</h2>
                </div>
                <div className="usp-grid" reveal="frombottom">
                  <div contentwrap="" id="w-node-d994acba-6d7e-fdbd-3ce7-8a5abaf2ddfd-ab90d4da" className="grid_item">
                    <div className="usp-stroke">
                      <div className="usp_card">
                        <div className="usp_title-wrap">
                          <div className="usp_icon-wrap"><img src={smartdistributionImg} alt=""></img></div>
                          <div>Smart Distribution</div>
                        </div>
                        <p className="text-size-regular">Each time BLU tokens are distributed to users, a 30% fee is levied, where 10% fuels the treasury for rewarding loyal supporters through airdrops, 10% undergoes buyback and burning, and the remaining 10% enhances liquidity</p>
                      </div>
                    </div>
                  </div>
                  <div contentwrap="" id="w-node-b5621efe-4e2b-0130-22d2-e382ad27cf98-ab90d4da" className="grid_item">
                    <div className="usp-stroke">
                      <div className="usp_card">
                        <div className="usp_title-wrap">
                          <div className="usp_icon-wrap"><img src={buybackburnImg} alt=""></img></div>
                          <div>Buyback &amp; Burn</div>
                        </div>
                        <p className="text-size-regular">Whenever the BLU tokens are issued as rewards, 10% of the reward is immediately treated under buyback and burn action which reduce the overall token supply while making the token more valuable than before.</p>
                      </div>
                    </div>
                  </div>
                  <div contentwrap="" id="w-node-c6d4b342-322d-87fb-1425-635e8c810d55-ab90d4da" className="grid_item">
                    <div className="usp-stroke">
                      <div className="usp_card">
                        <div className="usp_title-wrap">
                          <div className="usp_icon-wrap"><img src={stakingmultiplierImg} alt=""></img></div>
                          <div>Staking Multiplier</div>
                        </div>
                        <p className="text-size-regular">Explore our Staking Multiplier program that lets you reinvest your BLU earnings, unlocking a remarkable APR of 20% to 25%. With each stake, you multiply your rewards and make a bigger cashbag.</p>
                      </div>
                    </div>
                  </div>
                  <div contentwrap="" id="w-node-_36765ac4-edf9-27e7-6fff-689b4325aa32-ab90d4da" className="grid_item">
                    <div className="usp-stroke">
                      <div className="usp_card">
                        <div className="usp_title-wrap">
                          <div className="usp_icon-wrap"><img src={instantconversionImg} alt=""></img></div>
                          <div>Instant Conversion</div>
                        </div>
                        <p className="text-size-regular">With just 1000 BLU tokens in your wallet, you gain instant access to convert them into Solana. From there, seamlessly cash out through leading centralized exchanges like Binance, turning your crypto earnings into the fiat currency of your choice.</p>
                      </div>
                    </div>
                  </div>
                  <div contentwrap="" id="w-node-_7755e4ae-20ca-b034-d4c5-89e00f811e3f-ab90d4da" className="grid_item">
                    <div className="usp-stroke">
                      <div className="usp_card">
                        <div className="usp_title-wrap">
                          <div className="usp_icon-wrap"><img src={rankingmechanismImg} alt=""></img></div>
                          <div>Ranking Mechanism</div>
                        </div>
                        <p className="text-size-regular">At BlueNode, we&#x27;re all about going the extra mile. In addition to staking, we introduce a monthly leaderboard where the top 100 contributors, sharing the most unused bandwidth, earn extra BLU tokens through exclusive airdrops.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="ups-btn-row">
                  <Link to="/buy-page" className="secoundry-button w-inline-block">
                    <div className="button_inner-wrap">
                      <div>Buy BLU</div>
                    </div>
                  </Link>
                  <a href="#" className="secoundry-button w-inline-block">
                    <div className="button_inner-wrap">
                      <div>How to Buy</div>
                    </div>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="section_divider">
              <div className="sec_left-divider"><img src={dividerleftLine} alt="" className="divider_line"></img></div><img src={rotateGif} alt="" className="rotate-gif"></img>
              <div className="sec_right-divider"><img src={dividerrightLine} alt="" className="divider_line"></img></div>
            </div>
          </section>


          <section id="technology" className="sec_technology" gsap="group">
            <div className="container container-large">
              <div className="company-shadow"></div>
              <div reveal="frombottom" className="section-title-wrap">
                <div className="section-tag"><img src={technologyTag} alt="Section Tag"></img></div>
                <h2 className="heading-style-h2">Powered By</h2>
              </div>
              <div reveal="frombottom" className="technology-grid">
                <div id="w-node-_2879fd43-dba0-21c0-6654-8b55fcd60964-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={metamasklogoImg} alt="Digital China" className="metamask-logo"></img></div>
                </div>
                <div className="grid_item">
                  <div className="technology-item"><img src={walletconnectLogo} alt="Exor" className="walletconnect-logo"></img></div>
                </div>
                <div id="w-node-b4a0d4d4-6f5a-ba17-82d3-b442660424c6-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={trustwalletLogo} alt="" className="trustwallet-logo"></img></div>
                </div>
                <div id="w-node-_64660303-6335-8b3e-0966-bd737710bb1d-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={awsLogo} alt="" className="aws-logo"></img></div>
                </div>
                <div id="w-node-_150bb63c-0d10-59d5-b52e-561c34c3a1c0-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={googleLogo} alt="" className="google-logo"></img></div>
                </div>
                <div id="w-node-_5e365f05-98e4-4a53-11b2-0c173f076ac5-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={openAi} alt="" className="openai-logo"></img></div>
                </div>
                <div id="w-node-_64119e4c-4805-4277-f15d-2887628c83e8-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={githubLogo} alt="" className="github-logo"></img></div>
                </div>
                <div id="w-node-_4ea3801c-0a45-6549-9382-4a486949471d-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={telegramLogo} alt="" className="telegram-logo"></img></div>
                </div>
                <div id="w-node-b1575f2e-d19a-6d3f-9297-fc4f6f1093df-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={solanaLogo} alt="" className="solana-logo"></img></div>
                </div>
                <div id="w-node-_7844ca93-b11a-fbf9-133c-a9700d81b72d-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={coinmarketLogo} alt="" className="coinmarketcap-logo"></img></div>
                </div>
                <div id="w-node-_597e4e78-637f-c520-de77-1b4a2bd0b6cf-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={coingeckoLogo} alt="" className="coingecko-logo"></img></div>
                </div>
                <div id="w-node-_7230fc21-721d-fab4-7f53-9c8e1c96d614-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={mysqlLogo} alt="" className="mysql-logo"></img></div>
                </div>
                <div id="w-node-_9c88372c-e0b8-2063-7b30-2f371fe149ee-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={reactLogo} alt="" className="react-logo"></img></div>
                </div>
                <div id="w-node-_6b540df8-cf39-65be-31a7-4ada6ef8d88c-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={figmaLogo} alt="" className="figma-logo"></img></div>
                </div>
                <div id="w-node-d7720803-3425-7725-9f90-a9b218cb49ff-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={googleanalyticsLogo} alt="" className="googleanalytics-logo"></img></div>
                </div>
                <div id="w-node-_0e70843a-50ab-6ef9-499d-7afb2ca3b6e6-ab90d4da" className="grid_item">
                  <div className="technology-item"><img src={ledgerLogo} alt="" className="ledger-logo"></img></div>
                </div>
              </div>
            </div>
            <div className="section_divider">
              <div className="sec_left-divider"><img src={dividerleftLine} alt="" className="divider_line"></img></div><img src={rotateGif} alt="" className="rotate-gif"></img>
              <div className="sec_right-divider"><img src={dividerrightLine} alt="" className="divider_line"></img></div>
            </div>
          </section>
          <section id="share" className="sec_share" gsap="group">
            <div className="container container-large">
              <div reveal="frombottom" className="section-title-wrap">
                {/* <div className="section-tag"><img src={shareImg}  alt="Section Tag"></img></div> */}
                <h2 className="heading-style-h2">Spread the Word</h2>
              </div>
              <div className="share_shadow"></div>
              <div className="share_shadow _2"></div>
              <div className="share_grid">
                <div reveal="frombottom" className="grid_item">
                  <div className="share-content">
                    <p className="text-size-regular">Unite your circle into BlueNode, where collective endeavors lead to unparalleled rewards. Embrace a new era of passive cryptocurrency income.</p>
                    <div className="share_img-wrap is_formob" reveal="grow">
                      <div className="share_img-holder" >
                        <div className="share-img-wrap"><img src={bIcon} alt="" className="share-logo"></img></div><img src={shareGif} alt="" className="share-gif"></img>
                      </div>
                    </div>
                    <div className="share-platform-wrap">
                      <span className="share_social-media w-inline-block"><img src={twitterImg} alt=""></img></span>
                      <span className="share_social-media w-inline-block"><img src={telegramsocialmediaLogo} alt=""></img></span>
                      <span className="share_social-media w-inline-block"><img src={facebookLogo} alt=""></img></span>
                      <span className="share_social-media w-inline-block"><img src={roboLogo} alt=""></img></span>
                      <span className="share_social-media w-inline-block"><img src={whatsappLogo} alt=""></img></span>
                    </div>
                  </div>
                </div>
                <div className="grid_item is_forweb">
                  <div className="share_img-wrap" reveal="grow">
                    <div className="share-img-wrap"><img src={bIcon} alt="" className="share-logo"></img></div><img src={shareGif} alt="" className="share-gif"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="section_divider">
              <div className="sec_left-divider"><img src={dividerleftLine} alt="" className="divider_line"></img></div><img src={rotateGif} alt="" className="rotate-gif"></img>
              <div className="sec_right-divider"><img src={dividerrightLine} alt="" className="divider_line"></img></div>
            </div>
          </section>
          <section id="blu" className="sec_tokenomics" gsap="group">
            <div className="container container-large">
              <div className="tokenomics_shadow"></div>
              <div reveal="frombottom" className="section-title-wrap">
                <div className="section-tag"><img src={bluImg} alt=""></img></div>
                <h2 className="heading-style-h2">Tokenomics</h2>
              </div>
              <div className="tokenomics-wrap" reveal="frombottom">
                <div className="tokenomics-content"><img src={tokenomics1Img} alt="" className="tokenomics-img for-web"></img> <img src={mobiletokenomicsLogo} alt="" className="tokenomics-img fot-mob"></img></div>
              </div>
            </div>
            <div className="section_divider">
              <div className="sec_left-divider"><img src={dividerleftLine} alt="" className="divider_line"></img></div><img src={rotateGif} alt="" className="rotate-gif"></img>
              <div className="sec_right-divider"><img src={dividerrightLine} alt="" className="divider_line"></img></div>
            </div>
          </section>
          <Roadmap />
          <section id="faq" className="sec_faq" gsap="group">
            <div className="container container-large">
              <div className="faq_shadow"></div>
              <div className="faq_shadow _2"></div>
              <div className="faq_shadow _3"></div>
              <div reveal="frombottom" className="section-title-wrap">
                <div className="section-tag"><img src={faqTag} alt=""></img></div>
                <h2 className="heading-style-h2">Frequently Asked Questions</h2>
              </div>
              <FAQPage />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Mainpage