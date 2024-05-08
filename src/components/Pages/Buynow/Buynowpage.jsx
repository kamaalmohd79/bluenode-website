import React, { useEffect } from 'react'
import './Buynowpage.scss'



import rocketImg from '../../../assets/images/rocket.svg'
import ethereumImg from '../../../assets/images/ethereum.svg'
import moneyImg from '../../../assets/images/money.svg'
import bnbImg from '../../../assets/images/bnb.svg'
import solanaImg from '../../../assets/images/solana.svg'
import referralStep1 from '../../../assets/images/referral-step-1.svg'
import referralStep2 from '../../../assets/images/Referral-Step-2.svg'
import referralStep3 from '../../../assets/images/Referral-Step-3.svg'
import referralStep4 from '../../../assets/images/Referral-Step-4.svg'
import howbuyStep1 from '../../../assets/images/How-Buy-Step-1.svg'
import metmaskImg from '../../../assets/images/metmask.svg'
import coinbaseImg from '../../../assets/images/Coinbase.svg'
import trustImg from '../../../assets/images/Trust.svg'
import pluswalletImg from '../../../assets/images/pluswallet.svg'
import walletconnectImg from '../../../assets/images/walletconnect.svg'
import quickbuyImg from '../../../assets/images/Quick-Buy-3-1.png'
import howbuyStep2 from '../../../assets/images/How-Buy-Step-2.svg'
import howbuyStep3 from '../../../assets/images/How-Buy-Step-3..svg'
import airballonImg from '../../../assets/images/Air_Balloon_15.png'
import twitterIcon from '../../../assets/images/Twitter-icon.png'
import telegramIcon from '../../../assets/images/telegram-icon.png'
import facebookIcon from '../../../assets/images/facebook-icon.png'
import roboIcon from '../../../assets/images/robo-icon.png'
import whatsappIcon from '../../../assets/images/whatsapp-icon.png'
import copyIcon from '../../../assets/images/Copy Icon.svg'
import { useLocation } from 'react-router-dom'

function Buynowpage() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <div class="main-wrapper">
        <div class="overflow-x-clip">

          <section class="sec_buy-hero" gsap="group">
            <div class="container container-large">
              <div class="bg_shadow">
                <div class="buy_hero-shadow"></div>
                <div class="buy_hero-shadow _2"></div>
              </div>
              <div class="buy_hero-grid">
                <div id="w-node-_76d29ec2-9ddc-a8e8-94df-54f16640b8c8-c0ab6ab5" reveal="frombottom" class="grid_item">
                  <div class="buy_hero-wrap">
                    <h1 class="heading_style-h2-48">Join <span class="gradient_text">BlueNode</span> &amp; Tap On the Earning Potential of Your Unused Internet Today!</h1>
                    <div class="buy_desc-wrap">
                      <p class="text-size-regular-20">Become part of the next big thing. BlueNode opens endless opportunities to help you transform your unused internet bandwidth into crypto treasure.</p>
                    </div>
                    <div class="buy_btn-wrap">
                      <a href="#how-to-buy-blu-tokens" class="secoundry-button w-inline-block">
                        <div class="button_inner-wrap secoundry">
                          <div>How To Buy</div>
                        </div>
                      </a>
                      <button class="secoundry-button w-inline-block">
                        <div class="button_inner-wrap secoundry">
                          <div>Read NodePaper</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div id="w-node-_6818cf46-f94e-a0d4-808a-17b6ed6e6673-c0ab6ab5" reveal="grow" class="grid_item">
                  <div class="buy_presale-stroke">
                    <div class="buy_presale-card">
                      <div class="buy_presale-header">
                        <div class="buy_presale-title"><img src={rocketImg} alt="" class="presale_rocket"></img>
                          <div>Buy Presale</div>
                        </div>
                        <div class="presale_raised">
                          <div>RAISED</div>
                          <div class="div-block-2">
                            <div class="text-color-green">$106,421.13</div>
                            <div class="text-color-green">/</div>
                            <div class="text-color-green">$150,000.00</div>
                          </div>
                        </div>
                      </div>
                      <div class="presale_tracker">
                        <div class="presale-drag"></div>
                      </div>
                      <div class="presale_countdown-row">
                        <div class="total_presale">
                          <div>Tokens Available:</div>
                          <div class="text-color-green">2250</div>
                        </div>
                        <div class="total_presale">
                          <div>Count Down:</div>
                          <div class="text-color-green">12 : 22 : 50</div>
                        </div>
                      </div>
                      <div class="presale_tabs">
                        <div class="presale_tabs-menu ">
                          <button data-w-tab="Tab 1" class="tab_link"><img src={ethereumImg} alt="" class="presale_icon"></img>
                            <div>ETH</div>
                          </button>
                          <button class="tab_link "><img src={moneyImg} alt="" class="presale_icon"></img>
                            <div>USDT</div>
                          </button>
                          <button class="tab_link "><img src={bnbImg} alt="" class="presale_icon"></img>
                            <div>BNB</div>
                          </button>
                          <button class="tab_link "><img src={solanaImg} alt="" class="presale_icon"></img>
                            <div>SOL</div>
                          </button>
                        </div>

                      </div>
                      <div class="presale_countdown-row">
                        <div class="total_presale">
                          <div>Current Price:</div>
                          <div class="text-color-green">$0.005</div>
                        </div>
                        <div class="total_presale">
                          <div>Next Price:</div>
                          <div class="text-color-green">$0.025</div>
                        </div>
                      </div>
                      <div class="presale_form-block w-form">
                        <form id="wf-form-Buy-Presale-Form" name="wf-form-Buy-Presale-Form" data-name="Buy Presale Form" method="get" data-wf-page-id="6633acea67af36c9c0ab6ab5" data-wf-element-id="ab5e9a59-f063-6b25-6f58-488e676548cd">
                          <div class="presale_amount-grd">
                            <div class="presale_item"><label for="name" class="presale_field-name">AMOUNT IN USD YOU PAY</label>
                              <div class="presale_fiield-wrap">
                                <div class="amount_pay">USD</div><input class="presale_field w-input" maxlength="256" name="AMOUNT-IN-USD-YOU-PAY" data-name="AMOUNT IN USD YOU PAY" placeholder="0.0" type="number" id="AMOUNT-IN-USD-YOU-PAY" />
                              </div>
                            </div>
                            <div id="w-node-_50dad9fc-ac51-b485-b153-12df423feb1a-c0ab6ab5" class="presale_item _2"><label for="name" class="presale_field-name">AMOUNT YOU RECEIVE</label>
                              <div class="presale_fiield-wrap">
                                <div class="amount_pay">$BLU</div><input class="presale_field w-input" maxlength="256" name="AMOUNT-YOU-RECEIVE" data-name="AMOUNT YOU RECEIVE" placeholder="0.0" type="number" id="AMOUNT-YOU-RECEIVE" />
                              </div>
                            </div>
                          </div>
                          <button class="presale_form-field">Connect Wallet</button><input type="submit" data-wait="Please wait..." class="presale_form-field hide w-button" value="Connect Wallet" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section class="sec_investors" gsap="group" >
            <div class="container container-large">
              <div class="investors_grid">
                <div id="w-node-_68177421-f7ed-12fd-ab6d-6f5b38caf74a-c0ab6ab5" reveal="frombottom" class="grid_item">
                  <div class="investors_content">
                    <h2 class="heading_style-h2-48">Earn a <span class="gradient_text">15% Bonus</span> from All Referred Investors!</h2>
                    <p class="text-size-regular-20">Spread the word using your personal link and watch the rewards roll in! Earn a generous 15% of every BLU investment made by friends, family, and your network.</p>
                  </div>
                </div>
                <div id="w-node-_9a96111e-3851-1456-0164-5b8b3bf4b273-c0ab6ab5" reveal="frombottom" class="grid_item">
                  <div class="investors_stroke">
                    <div class="investor_top-content">
                      <div class="investor_title">Earn More BLU By Referring Your Friends &amp; Family</div>
                      <p class="investors_desc">Share your unique link below and receive 15% of all transactions are realized with your link instantly</p>
                      <div class="investor_form-block w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" method="get" class="investor_form" data-wf-page-id="6633acea67af36c9c0ab6ab5" data-wf-element-id="8c9ff5fe-bb01-2b08-3993-ba24089208fc">
                          <div class="investor_field-wrap"><input class="investor_field w-input" maxlength="256" name="email" data-name="Email" placeholder="Connect wallet for referral link" type="text" id="investorreferral" required="" />
                            <div class="link_copy-wrap">
                              <div class="copy_icon "><img src={copyIcon} alt="" /></div>
                            </div>
                          </div>
                          <div class="investor_btn">Connect Wallet</div><input type="submit" data-wait="Please wait..." class="investor_btn hide w-button" value="Connect Wallet" />
                        </form>


                      </div>
                    </div>
                    <div class="investor_bottom-stroke">
                      <div class="investor_bottom-content">
                        <p class="investors_desc">Share it directly on your social media!</p>
                        <div class="investor_social-wrap">
                          <span class="investor_social-icon w-inline-block"><img src={twitterIcon} alt="" /></span>
                          <span class="investor_social-icon w-inline-block"><img src={telegramIcon} alt="" /></span>
                          <span class="investor_social-icon w-inline-block"><img src={facebookIcon} alt="" /></span>
                          <span class="investor_social-icon w-inline-block"><img src={roboIcon} alt="" /></span>
                          <span class="investor_social-icon w-inline-block"><img src={whatsappIcon} alt="" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg_shadow">
                <div class="investor-shadow"></div>
                <div class="investor-shadow for_mob"></div>
              </div>
            </div>
          </section>



          <section class="sec_referral" gsap="group">
            <div class="container container-large">
              <div class="referral-wrapper">
                <h2 class="heading_style-h2-48" reveal="frombottom">Broadcast across social platforms, through emails, or simply through conversation—let your REFERRAL LINK work its magic and watch your BLU grow!</h2>
                <div class="referral-grid">
                  <div reveal="frombottom" id="w-node-a2861869-7ad2-1c94-67da-1dd0a8096b44-c0ab6ab5" class="grid_item">
                    <div class="referral_stroke">
                      <div class="referral_card">
                        <div class="referral_icon-wrap"><img src={referralStep1} alt=""></img></div>
                        <div class="referral_title-wrap">
                          <div class="referral_title">Step 1</div>
                        </div>
                        <div class="referral_desc">Connect Your Wallet</div>
                      </div>
                    </div>
                  </div>
                  <div reveal="frombottom" id="w-node-b81ad508-e5b5-b29f-58ca-443f1c6cd6aa-c0ab6ab5" class="grid_item">
                    <div class="referral_stroke">
                      <div class="referral_card">
                        <div class="referral_icon-wrap"><img src={referralStep2} alt=""></img></div>
                        <div class="referral_title-wrap">
                          <div class="referral_title">Step 2</div>
                        </div>
                        <div class="referral_desc">Generate Your Referral Link</div>
                      </div>
                    </div>
                  </div>
                  <div reveal="frombottom" id="w-node-_822279f5-a798-16d8-8e5d-b834748f6071-c0ab6ab5" class="grid_item">
                    <div class="referral_stroke">
                      <div class="referral_card">
                        <div class="referral_icon-wrap"><img src={referralStep3} alt=""></img></div>
                        <div class="referral_title-wrap">
                          <div class="referral_title">Step 3</div>
                        </div>
                        <div class="referral_desc">Share the Link in Your Network</div>
                      </div>
                    </div>
                  </div>
                  <div reveal="frombottom" id="w-node-_41a20ed7-c5ad-a81e-cc9b-6dea99358ba9-c0ab6ab5" class="grid_item">
                    <div class="referral_stroke">
                      <div class="referral_card">
                        <div class="referral_icon-wrap"><img src={referralStep4} alt=""></img></div>
                        <div class="referral_title-wrap">
                          <div class="referral_title">Step 4</div>
                        </div>
                        <div class="referral_desc">Earn 15% Extra BLU Tokens</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="referral_list" reveal="frombottom" >
                  <div class="referral_item">
                    <div class="referral_item-icon"></div>
                    <p>Witness your earnings grow with your expanding network, generating passive income even while you sleep.</p>
                  </div>
                  <div class="referral_item">
                    <div class="referral_item-icon"></div>
                    <p>Infinite Earnings: There are no limits on your potential earnings; the moon is the limit.</p>
                  </div>
                  <div class="referral_item">
                    <div class="referral_item-icon"></div>
                    <p>Presale Lifetime Perks: Your referral code remains active until the conclusion of our presale, ensuring enduring benefits</p>
                  </div>
                </div>
              </div>
              <div class="bg_shadow">
                <div class="referral_shadow"></div>
                <div class="referral_shadow for_mob"></div>
              </div>
            </div>
          </section>



          <section id="how-to-buy-blu-tokens" class="sec_how-buy" gsap="group">
            <div class="container container-large">
              <div data-w-id="1fb4a6df-0183-9d36-b8eb-b12aee327b22" class="how_wrapper">
                <div class="how_title-wrap" reveal="frombottom"  >
                  <h2 class="heading_style-h2-48">How To Buy <span class="gradient_text">BLU Tokens</span></h2>
                </div>
                <div class="how_list">
                  <div class="how_buy-grid" reveal="frombottom" >
                    <div id="w-node-_2c5033e6-f0d9-c66a-9089-e5728d774037-c0ab6ab5" class="grid_item">
                      <div class="how_buy-content">
                        <div class="hb-header">
                          <div class="hb_icon-wrap"><img src={howbuyStep1} alt=""></img></div>
                          <div>STEP 1</div>
                        </div>
                        <p class="text-size-regular-20">If you&#x27;re buying on mobile, we advise using Trust Wallet or Plus Wallet and connecting via the built-in WalletConnect feature. If you are purchasing on a desktop or laptop, ensure you have a MetaMask wallet installed in your browser or utilize one of the supported wallets by WalletConnect.</p>
                      </div>
                    </div>
                    <div id="w-node-d8c7a47d-b11a-dace-1b09-b997e8e70f42-c0ab6ab5" class="grid_item">
                      <div class="hb_stroke">
                        <div class="hb_card">
                          <div class="hb_inner-grid">
                            <div id="w-node-_1eb84ef5-f38a-ea74-ea14-29f19635db7a-c0ab6ab5" class="hb_logo-wrap"><img src={metmaskImg} alt=""></img></div>
                            <div id="w-node-f06ce932-66c6-0c2e-5201-55104d8a01f3-c0ab6ab5" class="hb_logo-wrap"><img src={coinbaseImg} alt=""></img></div>
                            <div id="w-node-e86d394a-7f99-fa74-2bc8-dbbcdaeb42ec-c0ab6ab5" class="hb_logo-wrap"><img src={trustImg} alt=""></img></div>
                            <div id="w-node-faac2bcd-5a29-7976-0066-25a75a283e74-c0ab6ab5" class="hb_logo-wrap"><img src={pluswalletImg} alt=""></img></div>
                            <div id="w-node-_08ef6525-e0a9-5e28-2d9d-581faa93b864-c0ab6ab5" class="hb_logo-wrap"><img src={walletconnectImg} alt=""></img></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="how_buy-grid _2" reveal="frombottom" >
                    <div id="w-node-d39be38c-0038-d969-cc9a-b823e36b464e-c0ab6ab5" class="grid_item">
                      <div class="hb_stroke">
                        <div class="hb_card"><img src={quickbuyImg} alt="" class="hb_img"></img></div>
                      </div>
                    </div>
                    <div id="w-node-d39be38c-0038-d969-cc9a-b823e36b4645-c0ab6ab5" class="grid_item">
                      <div class="how_buy-content">
                        <div class="hb-header">
                          <div class="hb_icon-wrap"><img src={howbuyStep2} alt=""></img></div>
                          <div>STEP 2</div>
                        </div>
                        <p class="text-size-regular-20">After setting up your preferred wallet provider, click on &quot;Connect Wallet&quot; and choose the appropriate option. If you&#x27;re using a mobile wallet app, select &quot;WalletConnect&quot;. Select your method of purchase (SOL, ETH, BNB, or USDT, ) and input the amount of currency you want to spend to receive $BLU tokens.</p>
                      </div>
                    </div>
                  </div>
                  <div class="how_buy-grid" reveal="frombottom" >
                    <div id="w-node-c3e0cc69-3127-ace4-611e-757f47ffc115-c0ab6ab5" class="grid_item">
                      <div class="how_buy-content">
                        <div class="hb-header">
                          <div class="hb_icon-wrap"><img src={howbuyStep3} alt=""></img></div>
                          <div>STEP 3</div>
                        </div>
                        <p class="text-size-regular-20">Once the presale has concluded, you will be airdropped with your BLU tokens and BlueNode ID. Once the BlueNode extension goes live during Phase V, you can install the extension using your unique BlueNode ID and start sharing your unused internet in return for 500% appreciated BLU tokens.</p>
                      </div>
                    </div>
                    <div id="w-node-c3e0cc69-3127-ace4-611e-757f47ffc11e-c0ab6ab5" class="grid_item">
                      <div class="hb_stroke">
                        <div class="hb_card"><img src={airballonImg} alt="" class="hb_img"></img></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg_shadow">
                <div class="how_buy-shadow"></div>
                <div class="how_buy-shadow _2"></div>
                <div class="how_buy-shadow _3"></div>
                <div class="how_buy-shadow _4"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Buynowpage