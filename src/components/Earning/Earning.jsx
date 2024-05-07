import React from 'react'
import '../Pages/Landingpage/Mainpage.scss'
import earningImg from '../../../src/assets/images/Earning.svg'
import miningrigsrequired from '../../../src/assets/images/NO-Mining-Rigs-Required.svg'
import wrongImg from '../../../src/assets/images/Wrong.svg'
import pcorlaptopImg from '../../../src/assets/images/Regular-PC-or-Laptop.svg'
import idextensionImg from '../../../src/assets/images/BlueNode-ID--Extension.svg'
import earningverifiedImg from '../../../src/assets/images/Earning-Verified.svg'
import dividerleftLine from '../../../src/assets/images/Divider-Left-Line.svg'
import dividerrightLine from '../../../src/assets/images/Divider-right-line.svg'
import endmachineImg from '../../../src/assets/images/NO-High-End-Machine.svg'
import learningImg from '../../../src/assets/images/NO-Learning-Required.svg'
import stableImg from '../../../src/assets/images/Stable-Internet-Connection.svg'
import rotateGif from '../../../src/assets/images/3dgifmaker62304.gif'


function Earning() {
    return (
        <div>
            <section id="earning" class="sec_earning">
                <div class="container container-large">
                    <div data-w-id="61563981-ac55-787e-584b-f1b65938220c" class="earning-content">
                        <div data-w-id="770f9527-76d8-c25f-2a70-17c933db9b9a" class="section-title-wrap">
                            <div class="section-tag"><img src={earningImg} loading="lazy" alt="Section tag"></img></div>
                            <h2 class="heading-style-h2">How Much I Can Earn</h2>
                        </div>
                        <div data-w-id="741ca5e2-6865-d911-409c-fc24e029b24b" class="earning_desc-wrap">
                            <p class="text-size-regular">If you continue running the BlueNode for a month, that’s anywhere between <span class="gradient_text">1200 USD to 5000 USD</span> worth of BLU tokens in your wallet.</p>
                        </div>
                        <div data-w-id="f89048bb-ff66-5ff6-6788-e3cf5ac8763f" class="earning-grid">
                            <div id="w-node-_9b526fb6-b49a-2ddc-e15f-6c6287477bce-ab90d4da" class="grid_item">
                                <div class="earning-stroke">
                                    <div class="earning_card">
                                        <div class="earning_icon-wrap"><img src={miningrigsrequired} loading="lazy" alt=""></img></div>
                                        <div>NO Mining Rigs Required</div>
                                        <div class="earning_check"><img src={wrongImg} loading="lazy" alt=""></img></div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-ca43102b-b055-7e8b-238a-6b6a89089739-ab90d4da" class="grid_item">
                                <div class="earning-stroke">
                                    <div class="earning_card">
                                        <div class="earning_icon-wrap"><img src={endmachineImg} loading="lazy" alt=""></img></div>
                                        <div>NO High-End Machine</div>
                                        <div class="earning_check"><img src={wrongImg} loading="lazy" alt=""></img></div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_3ea9838d-169c-9bff-d2b4-17a6d55c56ee-ab90d4da" class="grid_item">
                                <div class="earning-stroke">
                                    <div class="earning_card">
                                        <div class="earning_icon-wrap"><img src={learningImg} loading="lazy" alt=""></img></div>
                                        <div>NO Learning Required</div>
                                        <div class="earning_check"><img src={wrongImg} loading="lazy" alt=""></img></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-w-id="ec731f05-b261-07a1-e68f-317ce2f12655" class="earning_verified">
                            <div>All You Need</div>
                        </div>
                        <div data-w-id="c13fe7b1-b349-f5a6-964b-92d0fddc097a" class="earning-grid">
                            <div id="w-node-c13fe7b1-b349-f5a6-964b-92d0fddc097b-ab90d4da" class="grid_item">
                                <div class="earning-stroke">
                                    <div class="earning_card">
                                        <div class="earning_icon-wrap"><img src={stableImg} loading="lazy" alt=""></img></div>
                                        <div>Stable Internet Connection</div>
                                        <div class="earning_check"><img src={earningverifiedImg} loading="lazy" alt=""></img></div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-c13fe7b1-b349-f5a6-964b-92d0fddc0984-ab90d4da" class="grid_item">
                                <div class="earning-stroke">
                                    <div class="earning_card">
                                        <div class="earning_icon-wrap"><img src={pcorlaptopImg} loading="lazy" alt=""></img></div>
                                        <div>Regular PC or Laptop</div>
                                        <div class="earning_check"><img src={earningverifiedImg} loading="lazy" alt=""></img></div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-c13fe7b1-b349-f5a6-964b-92d0fddc098d-ab90d4da" class="grid_item">
                                <div class="earning-stroke">
                                    <div class="earning_card">
                                        <div class="earning_icon-wrap"><img src={idextensionImg} loading="lazy" alt=""></img></div>
                                        <div>BlueNode ID &amp; Extension</div>
                                        <div class="earning_check"><img src={earningverifiedImg} loading="lazy" alt=""></img></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="earning_shadow"></div>
                </div>
                <div class="section_divider">
                    <div class="sec_left-divider"><img src={dividerleftLine} loading="lazy" alt="" class="divider_line"></img></div><img src={rotateGif} loading="lazy" alt="" class="rotate-gif"></img>
                    <div class="sec_right-divider"><img src={dividerrightLine} loading="lazy" alt="" class="divider_line"></img></div>
                </div>
            </section>
        </div>
    )
}

export default Earning