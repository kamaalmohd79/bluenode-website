import React from 'react'
import '../Pages/Landingpage/Mainpage.scss'
import smartdistributionImg from '../../../src/assets/images/Smart-Distribution.svg'
import buybackburnImg from '../../../src/assets/images/Buyback--Burn.svg'
import stakingmultiplierImg from '../../../src/assets/images/Staking-Multiplier.svg'
import instantconversionImg from '../../../src/assets/images/Instant-Conversion.svg'
import rankingmechanismImg from '../../../src/assets/images/Ranking-Mechanism.svg'
import upImg from '../../../src/assets/images/up--up.svg'

function Usp() {
    return (
        <div>
            <section id="usp" className="sec_usp">
                <div className="container container-large">
                    <div className="usp_shadow"></div>
                    <div className="usp_shadow _2"></div>
                    <div className="usp_shadow _3"></div>
                    <div className="usp_shadow _4"></div>
                    <div data-w-id="8240a945-4139-df69-3ab5-3e45c96369ce" className="usp-wrap">
                        <div className="section-title-wrap">
                            <div className="section-tag"><img src={upImg} alt="Section  tag"></img></div>
                            <h2 className="heading-style-h2">BLU to the Moon</h2>
                        </div>
                        <div className="usp-grid">
                            <div id="w-node-d994acba-6d7e-fdbd-3ce7-8a5abaf2ddfd-ab90d4da" className="grid_item">
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
                            <div id="w-node-b5621efe-4e2b-0130-22d2-e382ad27cf98-ab90d4da" className="grid_item">
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
                            <div id="w-node-c6d4b342-322d-87fb-1425-635e8c810d55-ab90d4da" className="grid_item">
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
                            <div id="w-node-_36765ac4-edf9-27e7-6fff-689b4325aa32-ab90d4da" className="grid_item">
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
                            <div id="w-node-_7755e4ae-20ca-b034-d4c5-89e00f811e3f-ab90d4da" className="grid_item">
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
                    </div>
                </div>
                <div className="section_divider">
                    <div className="sec_left-divider"><img src="{dividerleftLine}" alt="" className="divider_line"></img></div><img src="{rotateGif}" alt="" className="rotate-gif"></img>
                    <div className="sec_right-divider"><img src="{dividerrightLine}" alt="" className="divider_line"></img></div>
                </div>
            </section>
        </div>
    )
}

export default Usp