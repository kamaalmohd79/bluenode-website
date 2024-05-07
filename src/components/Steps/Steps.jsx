import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../Pages/Landingpage/Mainpage.scss'


import stepImg  from '../../assets/images/Steps.svg'
import stepbgImg  from '../../assets/images/Step-Background.svg'
import stepdivider  from '../../assets/images/Step-Divider.svg'
import presaleImg  from '../../assets/images/Presale.svg'
import downloadextensionImg  from '../../assets/images/Download-Extension.svg'
import blutokenImg  from '../../assets/images/run.png'
import cashoutImg  from '../../assets/images/Cashout-step.png'
import dividerleftLine  from '../../assets/images/Divider-Left-Line.svg'
import rotateGif  from '../../assets/images/3dgifmaker62304.gif'
import dividerrightLine  from '../../assets/images/Divider-right-line.svg'



gsap.registerPlugin(ScrollTrigger);
function Steps() {
  
    useEffect(() => {
        const processComponent = document.querySelector(".step-component");
        const processSteps = Array.from(processComponent.querySelectorAll(".step_item"));
        const processImages = Array.from(processComponent.querySelectorAll(".step_img-item"));
    
        processSteps[0].classList.add("is-active");
    
        const animations = processImages.map((image, index) => {
            const step = processSteps[index];
            return gsap.to(step, {
                scrollTrigger: {
                    trigger: image,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => {
                        processSteps.forEach(s => s.classList.remove("is-active"));
                        step.classList.add("is-active");
                    },
                    onEnterBack: () => {
                        processSteps.forEach(s => s.classList.remove("is-active"));
                        step.classList.add("is-active");
                    }
                }
            });
        });
    
        return () => {
            animations.forEach(animation => animation.kill());
        };
    }, []);
  


    return (
        <div>
            <div id="Steps" class="sec_4steps">
                <div class="container container-large">
                    <div reveal="frombottom" class="section-title-wrap">
                        <div class="section-tag"><img src={stepImg} loading="lazy" alt="Section tag"></img></div>
                        <h2 class="heading-style-h2">Getting Started with BlueNode</h2>
                    </div>
                </div>
                <div class="is_forweb" reveal="frombottom">
                    <div id="w-node-_6dc9c58c-fe16-4a45-c53b-eed5049752fb-ab90d4da" class="step_bg-wrap">
                        <div class="div-block">
                            <div class="step_shadow"></div><img src={stepbgImg} loading="lazy" alt="Step Main Background"></img>
                        </div>
                    </div>
                    <div class="step-component" >
                        <div id="w-node-_57c6416d-87bc-364b-3e5a-99c1bdfae8cc-ab90d4da" class="grid_item">
                            <div class="step_text-col">
                                <div class="step_list">
                                    <div class="step_item is-active">
                                        <div class="step_circle">
                                            <div class="step_active"></div>
                                            <div class="step_count">1</div>
                                        </div>
                                        <div class="step_details">
                                            <h3 class="step_title">Presale</h3>
                                            <div class="step_desc-wrap">
                                                <p class="step_desc">Secure your spot today! Simply join our whitelist by acquiring BLU tokens during the presale and claim your unique BlueNode ID.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step_item">
                                        <div class="step_circle">
                                            <div class="step_active"></div>
                                            <div class="step_count">2</div>
                                        </div>
                                        <div class="step_details">
                                            <h3 class="step_title">Download</h3>
                                            <div class="step_desc-wrap">
                                                <p class="step_desc">Dive into action! Download the BlueNode extension and breeze through registration using your unique BlueNode ID. It&#x27;s that simple.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step_item">
                                        <div class="step_circle">
                                            <div class="step_active"></div>
                                            <div class="step_count">3</div>
                                        </div>
                                        <div class="step_details">
                                            <h3 class="step_title">Run</h3>
                                            <div class="step_desc-wrap">
                                                <p class="step_desc">Download and start running the BlueNode into your daily browsing experience and earn BLU tokens. More bandwidth = More BLU tokens.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step_item">
                                        <div class="step_circle">
                                            <div class="step_active"></div>
                                            <div class="step_count">4</div>
                                        </div>
                                        <div class="step_details">
                                            <h3 class="step_title">Cash Out</h3>
                                            <div class="step_desc-wrap">
                                                <p class="step_desc">Convert your BLU tokens earnings into SOL and to any fiat of your choice afterward including USD, GBP, EUR, INR, AUD, CAD, and more!</p>
                                            </div>
                                        </div>
                                    </div><img src={stepdivider} loading="lazy" alt="Step Joining Line" class="step_divider"></img>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-e19e4b37-cfa6-dc73-040b-4f6b307464e7-ab90d4da" class="grid_item">
                            <div class="step_img-list">
                                <div class="step_img-item"><img src={presaleImg} loading="eager" alt="Step Main Image" class="step_img"></img></div>
                                <div class="step_img-item"><img src={downloadextensionImg} loading="eager" alt="Step Main Image" class="step_img"></img></div>
                                <div class="step_img-item"><img src={blutokenImg} alt="" /></div>
                                <div class="step_img-item"><img src={cashoutImg} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="is_formobile" reveal="frombottom">
                    <div class="container container-large">
                        <div class="step_shadow _1"></div>
                        <div class="step_shadow _2"></div>
                        <div class="step_shadow _3"></div>
                        <div class="step_shadow _4"></div>
                        <div class="step_grid-formob">
                            <div id="w-node-a4d22d90-21ed-212b-7abe-0c97aefd3a60-ab90d4da" class="grid_item">
                                <div class="step_card-formob">
                                    <div class="step_content">
                                        <div class="step_details-mob">
                                            <div class="step_count-mob">
                                                <div>1</div>
                                            </div>
                                            <div class="step_title-mob">Presale</div>
                                        </div>
                                        <p class="step_desc-mob">Secure your spot today! Simply join our whitelist by acquiring BLU tokens during the presale and claim your unique BlueNode ID.</p>
                                    </div>
                                    <div class="step_img-wrap-mob"><img src={presaleImg} loading="lazy" alt="" class="step_img-mob"></img></div>
                                </div>
                            </div>
                            <div id="w-node-_3f9a2325-2863-cfd6-95f9-ba95bf6e2bb5-ab90d4da" class="grid_item">
                                <div class="step_card-formob">
                                    <div class="step_content">
                                        <div class="step_details-mob">
                                            <div class="step_count-mob">
                                                <div>2</div>
                                            </div>
                                            <div class="step_title-mob">Download</div>
                                        </div>
                                        <p class="step_desc-mob">Dive into action! Download the BlueNode extension and breeze through registration using your unique BlueNode ID. It&#x27;s that simple.</p>
                                    </div>
                                    <div class="step_img-wrap-mob"><img src={downloadextensionImg} loading="lazy" alt="" class="step_img-mob"></img></div>
                                </div>
                            </div>
                            <div id="w-node-_73ab11ee-b992-b606-ce0c-19560a4a123c-ab90d4da" class="grid_item">
                                <div class="step_card-formob">
                                    <div class="step_content">
                                        <div class="step_details-mob">
                                            <div class="step_count-mob">
                                                <div>3</div>
                                            </div>
                                            <div class="step_title-mob">Run</div>
                                        </div>
                                        <p class="step_desc-mob">Download and start running the BlueNode into your daily browsing experience and earn BLU tokens. More bandwidth = More BLU tokens.</p>
                                    </div>
                                    <div class="step_img-wrap-mob"><img src={blutokenImg} alt="" class="step_img-mob"></img></div>
                                </div>
                            </div>
                            <div id="w-node-_2c0af283-07b3-d1b3-adbb-d8fbc4f7079f-ab90d4da" class="grid_item">
                                <div class="step_card-formob">
                                    <div class="step_content">
                                        <div class="step_details-mob">
                                            <div class="step_count-mob">
                                                <div>4</div>
                                            </div>
                                            <div class="step_title-mob">Cash Out</div>
                                        </div>
                                        <p class="step_desc-mob">Convert your BLU tokens earnings into SOL and to any fiat of your choice afterward including USD, GBP, EUR, INR, AUD, CAD, and more!</p>
                                    </div>
                                    <div class="step_img-wrap-mob"><img src={cashoutImg} alt="" class="step_img-mob"></img></div>
                                </div>
                            </div>
                        </div>
                        <div class="step-btn-wrap">
                            <a href="#" class="secoundry-button w-inline-block">
                                <div class="button_inner-wrap">
                                    <div>Join Presale</div>
                                </div>
                            </a>
                            <a href="#" class="secoundry-button w-inline-block">
                                <div class="button_inner-wrap">
                                    <div>How to Buy</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="section_divider">
                    <div class="sec_left-divider"><img src={dividerleftLine} loading="lazy" alt="" class="divider_line"></img></div><img src={rotateGif} loading="lazy" alt="" class="rotate-gif"></img>
                    <div class="sec_right-divider"><img src={dividerrightLine} loading="lazy" alt="" class="divider_line"></img></div>
                </div>
            </div>
        </div>
    )
}

export default Steps