import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../Pages/Landingpage/Mainpage.scss'

import roadmapImg from '../../assets/images/Road-map.svg'
import roadmaparrowImg from '../../assets/images/roadmap-arrow.svg'
import faqprevIcon from '../../assets/images/prev arrow.svg'
import faqnextIcon from '../../assets/images/prev arrow.svg'
import dividerleftLine from '../../assets/images/Divider-Left-Line.svg'
import rotateGif from '../../assets/images/3dgifmaker62304.gif'
import dividerrightLine from '../../assets/images/Divider-right-line.svg'


function Roadmap() {

    return (
        <div>
            <section id="roaadmap" className="sec_roadmap" gsap="group" >
                <div className="container container-large">
                    <div className="roadmap_shadow"></div>
                    <div className="roadmap_shadow _2"></div>
                    <div reveal="frombottom" className="section-title-wrap">
                        <div className="section-tag"><img src={roadmapImg} alt=""></img></div>
                        <h2 className="heading-style-h2">BlueNode Roadmap</h2>
                    </div>
                    <div className="roadmap_swiper-holder" reveal="frombottom">
                        <div className="roadswiper_arrow-wrap">
                            <div className="roadswiper_arrow-stroke road_prev">
                                <div className="roadswiper-arrow">
                                    <div className="roadswiper_arrow-icon w-embed"><img src={faqprevIcon} alt=""/></div>
                                </div>
                            </div>
                            <div className="roadswiper_arrow-stroke road_next">
                                <div className="roadswiper-arrow">
                                    <div className="roadswiper_arrow-icon right w-embed"><img src={faqnextIcon} alt=""/></div>
                                </div>
                            </div>
                        </div>
                        <div contentwrap="">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={1}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                                navigation={{
                                    nextEl: '.road_next',
                                    prevEl: '.road_prev'
                                }}
                                loop={true}
                                autoplay={{
                                    delay: 4000,
                                }}

                                className="roadmap-swiper">
                                <SwiperSlide className="swiper-slide roadmap-swiper-slide">
                                    <div className="roadmap_grid">
                                        <div id="w-node-f3a70216-0b62-65bd-889b-dc7c83a69299-ab90d4da" className="grid_item hide_formob">
                                            <div className="roadmap-arrow-wrap"><img src={roadmaparrowImg} alt=""></img></div>
                                        </div>
                                        <div id="w-node-f3a70216-0b62-65bd-889b-dc7c83a69288-ab90d4da" className="grid_item">
                                            <div className="roadmap-stroke">
                                                <div className="roadmap-card text-style-strikethrough">
                                                    <div className="roadmap-phase-title">Phase I </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div><s>Whitepaper Release</s></div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div><s>Community Building</s></div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div><s>Team Expansion</s></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide roadmap-swiper-slide">
                                    <div className="roadmap_grid">
                                        <div id="w-node-_85e1da57-6b65-2131-1ffe-5b43e4d6cb53-ab90d4da" className="grid_item hide_formob">
                                            <div className="roadmap-arrow-wrap"><img src={roadmaparrowImg} alt=""></img></div>
                                        </div>
                                        <div id="w-node-_85e1da57-6b65-2131-1ffe-5b43e4d6cb56-ab90d4da" className="grid_item">
                                            <div className="roadmap-stroke">
                                                <div className="roadmap-card text-style-strikethrough">
                                                    <div className="roadmap-phase-title">PHASE II </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div><s>Presale Preparation</s></div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div><s>Platform Development Kickoff</s></div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div><s>Smart Contract Development</s></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide roadmap-swiper-slide">
                                    <div className="roadmap_grid">
                                        <div id="w-node-_234471fc-68bc-7715-d67c-8f52737a34e0-ab90d4da" className="grid_item hide_formob">
                                            <div className="roadmap-arrow-wrap"><img src={roadmaparrowImg} alt=""></img></div>
                                        </div>
                                        <div id="w-node-_234471fc-68bc-7715-d67c-8f52737a34e3-ab90d4da" className="grid_item">
                                            <div className="roadmap-stroke">
                                                <div className="roadmap-card">
                                                    <div className="roadmap-phase-title">PHASE III</div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Presale Event</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Token Listing Preparation</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Continued Development</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide roadmap-swiper-slide">
                                    <div className="roadmap_grid">
                                        <div id="w-node-afdf5cff-9b92-fc0f-996e-65265672ac03-ab90d4da" className="grid_item hide_formob">
                                            <div className="roadmap-arrow-wrap"><img src={roadmaparrowImg} alt=""></img></div>
                                        </div>
                                        <div id="w-node-afdf5cff-9b92-fc0f-996e-65265672ac06-ab90d4da" className="grid_item">
                                            <div className="roadmap-stroke">
                                                <div className="roadmap-card">
                                                    <div className="roadmap-phase-title">PHASE IV</div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Platform Alpha Release</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Bug Bounty Program</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Community Testing</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide roadmap-swiper-slide">
                                    <div className="roadmap_grid">
                                        <div id="w-node-a782dd3c-2499-b43d-d509-8ef4779ea850-ab90d4da" className="grid_item hide_formob">
                                            <div className="roadmap-arrow-wrap"><img src={roadmaparrowImg} alt=""></img></div>
                                        </div>
                                        <div id="w-node-a782dd3c-2499-b43d-d509-8ef4779ea853-ab90d4da" className="grid_item">
                                            <div className="roadmap-stroke">
                                                <div className="roadmap-card">
                                                    <div className="roadmap-phase-title">PHASE V</div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Platform Beta Release</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>User Onboarding</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Security Enhancements</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide roadmap-swiper-slide">
                                    <div className="roadmap_grid">
                                        <div id="w-node-_40aefe86-ce17-c3aa-862d-44223a069833-ab90d4da" className="grid_item hide_formob">
                                            <div className="roadmap-arrow-wrap"><img src={roadmaparrowImg} alt=""></img></div>
                                        </div>
                                        <div id="w-node-_40aefe86-ce17-c3aa-862d-44223a069836-ab90d4da" className="grid_item">
                                            <div className="roadmap-stroke">
                                                <div className="roadmap-card">
                                                    <div className="roadmap-phase-title">PHASE VI</div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Governance Framework</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Smart Contract Audits</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Platform Optimization</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide roadmap-swiper-slide">
                                    <div className="roadmap_grid">
                                        <div id="w-node-_660a0b6b-0228-2b6f-b74b-8b997ef8d5fe-ab90d4da" className="grid_item hide_formob">
                                            <div className="roadmap-arrow-wrap"><img src={roadmaparrowImg} alt=""></img></div>
                                        </div>
                                        <div id="w-node-_660a0b6b-0228-2b6f-b74b-8b997ef8d601-ab90d4da" className="grid_item">
                                            <div className="roadmap-stroke">
                                                <div className="roadmap-card">
                                                    <div className="roadmap-phase-title">PHASE VII</div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Mainnet Launch</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Marketing Campaign</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Partnership Development</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide roadmap-swiper-slide">
                                    <div className="roadmap_grid">
                                        <div id="w-node-_5f3b3a61-6b12-406d-755e-7987df04e968-ab90d4da" className="grid_item hide_formob">
                                            <div className="roadmap-arrow-wrap"><img src={roadmaparrowImg} alt=""></img></div>
                                        </div>
                                        <div id="w-node-_5f3b3a61-6b12-406d-755e-7987df04e96b-ab90d4da" className="grid_item">
                                            <div className="roadmap-stroke">
                                                <div className="roadmap-card">
                                                    <div className="roadmap-phase-title">PHASE VIII</div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>User Acquisition</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Community Events</div>
                                                    </div>
                                                    <div className="phase-list">
                                                        <div className="phase-list-icon"></div>
                                                        <div>Documentation and Support</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="section_divider">
                    <div className="sec_left-divider"><img src={dividerleftLine} alt="" className="divider_line"></img></div><img src={rotateGif} alt="" className="rotate-gif"></img>
                    <div className="sec_right-divider"><img src={dividerrightLine} alt="" className=".divider_line"></img></div>
                </div>
            </section>
        </div>
    )
}

export default Roadmap