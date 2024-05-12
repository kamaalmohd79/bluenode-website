import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import '../Pages/Landingpage/Mainpage.scss'
import stepImg from '../../assets/images/Steps.svg'
import stepbgImg from '../../assets/images/Step-Background.svg'
import stepdivider from '../../assets/images/Step-Divider.svg'
import presaleImg from '../../assets/images/setp-01.webp'
import downloadextensionImg from '../../assets/images/setp-02.webp'
import blutokenImg from '../../assets/images/setp-03.webp'
import cashoutImg from '../../assets/images/setp-04.webp'
import dividerleftLine from '../../assets/images/Divider-Left-Line.svg'
import rotateGif from '../../assets/images/3dgifmaker62304.gif'
import dividerrightLine from '../../assets/images/Divider-right-line.svg'
import { Link } from "react-router-dom";



gsap.registerPlugin(ScrollTrigger);
function Steps() {


    useGSAP(() => {
        const processComponent = document.querySelector(".step-component");
        const processSteps = Array.from(processComponent.querySelectorAll(".step_item"));
        const processImages = Array.from(processComponent.querySelectorAll(".step_img-item"));
        setTimeout(() => {
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
                        markers: true,
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
        }, 2000);
    }, []);

    return (
        <div>
            <div id="Steps" className="sec_4steps">
                <div className="container container-large">
                    <div reveal="frombottom" className="section-title-wrap">
                        <div className="section-tag"><img src={stepImg} alt="Section tag"></img></div>
                        <h2 className="heading-style-h2">Getting Started with BlueNode</h2>
                    </div>
                </div>
                <div className="is_forweb" reveal="frombottom" contentwrap="">
                    <div id="w-node-_6dc9c58c-fe16-4a45-c53b-eed5049752fb-ab90d4da" className="step_bg-wrap">
                        <div className="div-block">
                            <div className="step_shadow"></div><img src={stepbgImg} alt="Step Main Background"></img>
                        </div>
                    </div>
                    <div className="step-component" >
                        <div id="w-node-_57c6416d-87bc-364b-3e5a-99c1bdfae8cc-ab90d4da" className="grid_item">
                            <div className="step_text-col">
                                <div className="step_list">
                                    <div className="step_item is-active">
                                        <div className="step_circle">
                                            <div className="step_active"></div>
                                            <div className="step_count">1</div>
                                        </div>
                                        <div className="step_details">
                                            <h3 className="step_title">Presale</h3>
                                            <div className="step_desc-wrap">
                                                <p className="step_desc">Secure your spot today! Simply join our whitelist by acquiring BLU tokens during the presale and claim your unique BlueNode ID.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step_item">
                                        <div className="step_circle">
                                            <div className="step_active"></div>
                                            <div className="step_count">2</div>
                                        </div>
                                        <div className="step_details">
                                            <h3 className="step_title">Download</h3>
                                            <div className="step_desc-wrap">
                                                <p className="step_desc">Dive into action! Download the BlueNode extension and breeze through registration using your unique BlueNode ID. It&#x27;s that simple.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step_item">
                                        <div className="step_circle">
                                            <div className="step_active"></div>
                                            <div className="step_count">3</div>
                                        </div>
                                        <div className="step_details">
                                            <h3 className="step_title">Run</h3>
                                            <div className="step_desc-wrap">
                                                <p className="step_desc">Download and start running the BlueNode into your daily browsing experience and earn BLU tokens. More bandwidth = More BLU tokens.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step_item">
                                        <div className="step_circle">
                                            <div className="step_active"></div>
                                            <div className="step_count">4</div>
                                        </div>
                                        <div className="step_details">
                                            <h3 className="step_title">Cash Out</h3>
                                            <div className="step_desc-wrap">
                                                <p className="step_desc">Convert your BLU tokens earnings into SOL and to any fiat of your choice afterward including USD, GBP, EUR, INR, AUD, CAD, and more!</p>
                                            </div>
                                        </div>
                                    </div><img src={stepdivider} alt="Step Joining Line" className="step_divider"></img>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-e19e4b37-cfa6-dc73-040b-4f6b307464e7-ab90d4da" className="grid_item">
                            <div className="step_img-list">
                                <div className="step_img-item"><img src={presaleImg} loading="eager" alt="Step Main" className="step_img"></img></div>
                                <div className="step_img-item"><img src={downloadextensionImg} loading="eager" alt="Step Main" className="step_img"></img></div>
                                <div className="step_img-item"><img src={blutokenImg} alt="" /></div>
                                <div className="step_img-item"><img src={cashoutImg} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="is_formobile" reveal="frombottom">
                    <div className="container container-large">
                        <div className="step_shadow _1"></div>
                        <div className="step_shadow _2"></div>
                        <div className="step_shadow _3"></div>
                        <div className="step_shadow _4"></div>
                        <div className="step_grid-formob">
                            <div id="w-node-a4d22d90-21ed-212b-7abe-0c97aefd3a60-ab90d4da" className="grid_item">
                                <div className="step_card-formob">
                                    <div className="step_content">
                                        <div className="step_details-mob">
                                            <div className="step_count-mob">
                                                <div>1</div>
                                            </div>
                                            <div className="step_title-mob">Presale</div>
                                        </div>
                                        <p className="step_desc-mob">Secure your spot today! Simply join our whitelist by acquiring BLU tokens during the presale and claim your unique BlueNode ID.</p>
                                    </div>
                                    <div className="step_img-wrap-mob"><img src={presaleImg} alt="" className="step_img-mob"></img></div>
                                </div>
                            </div>
                            <div id="w-node-_3f9a2325-2863-cfd6-95f9-ba95bf6e2bb5-ab90d4da" className="grid_item">
                                <div className="step_card-formob">
                                    <div className="step_content">
                                        <div className="step_details-mob">
                                            <div className="step_count-mob">
                                                <div>2</div>
                                            </div>
                                            <div className="step_title-mob">Download</div>
                                        </div>
                                        <p className="step_desc-mob">Dive into action! Download the BlueNode extension and breeze through registration using your unique BlueNode ID. It&#x27;s that simple.</p>
                                    </div>
                                    <div className="step_img-wrap-mob"><img src={downloadextensionImg} alt="" className="step_img-mob"></img></div>
                                </div>
                            </div>
                            <div id="w-node-_73ab11ee-b992-b606-ce0c-19560a4a123c-ab90d4da" className="grid_item">
                                <div className="step_card-formob">
                                    <div className="step_content">
                                        <div className="step_details-mob">
                                            <div className="step_count-mob">
                                                <div>3</div>
                                            </div>
                                            <div className="step_title-mob">Run</div>
                                        </div>
                                        <p className="step_desc-mob">Download and start running the BlueNode into your daily browsing experience and earn BLU tokens. More bandwidth = More BLU tokens.</p>
                                    </div>
                                    <div className="step_img-wrap-mob"><img src={blutokenImg} alt="" className="step_img-mob"></img></div>
                                </div>
                            </div>
                            <div id="w-node-_2c0af283-07b3-d1b3-adbb-d8fbc4f7079f-ab90d4da" className="grid_item">
                                <div className="step_card-formob">
                                    <div className="step_content">
                                        <div className="step_details-mob">
                                            <div className="step_count-mob">
                                                <div>4</div>
                                            </div>
                                            <div className="step_title-mob">Cash Out</div>
                                        </div>
                                        <p className="step_desc-mob">Convert your BLU tokens earnings into SOL and to any fiat of your choice afterward including USD, GBP, EUR, INR, AUD, CAD, and more!</p>
                                    </div>
                                    <div className="step_img-wrap-mob"><img src={cashoutImg} alt="" className="step_img-mob"></img></div>
                                </div>
                            </div>
                        </div>
                        <div className="step-btn-wrap">
                            <Link to="/buy-page" className="secoundry-button w-inline-block">
                                <div className="button_inner-wrap">
                                    <div>Join Presale</div>
                                </div>
                            </Link>
                            <span className="secoundry-button w-inline-block">
                                <div className="button_inner-wrap">
                                    <div>How to Buy</div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="section_divider">
                    <div className="sec_left-divider"><img src={dividerleftLine} alt="" className="divider_line"></img></div><img src={rotateGif} alt="" className="rotate-gif"></img>
                    <div className="sec_right-divider"><img src={dividerrightLine} alt="" className="divider_line"></img></div>
                </div>
            </div>
        </div>
    )
}

export default Steps