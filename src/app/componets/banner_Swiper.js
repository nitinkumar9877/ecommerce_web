"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../.../../../../public/sass/pages/swiper_slider.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import slide1 from "../../../public/Images/slidee1.webp";
import Link from "next/link";
import slide2 from "../../../public/Images/slide2.webp";
import slide3 from "../../../public/Images/slidee.webp";
import slide4 from "../../../public/Images/slide4.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import cardImg1 from "../../../public/Images/upper_banner_1.webp";
import cardImg2 from "../../../public/Images/upper_banner_2.webp";
import cardImg3 from "../../../public/Images/upper_banner_2.webp";
import cardImg4 from "../../../public/Images/upper_banner_2.webp";
// import 
function SwiperSlider() {
    library.add(fas, fab)

    return (

        <section className="swiper_section">
            <Container fluid>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            className="swiper_hello"
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop
                        >
                            <SwiperSlide>
                                <div className="card_banner" style={{
                                    backgroundImage: 'url(/Images/banner_bg_1.webp)'
                                }}>
                                    <div className="card_left_area">
                                        <div className="card_area_img">
                                            <Image
                                                src={cardImg1}
                                                alt="..."
                                                title="..."
                                                width={300}
                                                height={200}
                                                className="card_inner_img"
                                            />

                                        </div>

                                    </div>
                                    <div className="right_card_area">
                                        <div className="right_area_content">
                                            <h3 className='dataType'>Beds</h3>
                                            <p className='price'>From Rs. 8,999</p>
                                            <p className="description">
                                                Wooden Sheet sleepyhead & more
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card_banner" style={{
                                    backgroundImage: 'url(/Images/banner_bg_2.webp)'
                                }}>
                                    <div className="card_left_area">
                                        <div className="card_area_img">
                                            <Image
                                                src={cardImg2}
                                                alt="..."
                                                title="..."
                                                width={300}
                                                height={200}
                                                className="card_inner_img"
                                            />

                                        </div>

                                    </div>
                                    <div className="right_card_area">
                                        <div className="right_area_content">
                                            <h3 className='dataType'>Beds</h3>
                                            <p className='price'>From Rs. 8,999</p>
                                            <p className="description">
                                                Wooden Sheet sleepyhead & more
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card_banner" style={{
                                    backgroundImage: 'url(/Images/banner_bg_3.webp)'
                                }}>
                                    <div className="card_left_area">
                                        <div className="card_area_img">
                                            <Image
                                                src={cardImg3}
                                                alt="..."
                                                title="..."
                                                width={300}
                                                height={200}
                                                className="card_inner_img"
                                            />

                                        </div>

                                    </div>
                                    <div className="right_card_area">
                                        <div className="right_area_content">
                                            <h3 className='dataType'>Beds</h3>
                                            <p className='price'>From Rs. 8,999</p>
                                            <p className="description">
                                                Wooden Sheet sleepyhead & more
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card_banner" style={{
                                    backgroundImage: 'url(/Images/banner_bg_4.webp)'
                                }}>
                                    <div className="card_left_area">
                                        <div className="card_area_img">
                                            <Image
                                                src={cardImg4}
                                                alt="..."
                                                title="..."
                                                width={300}
                                                height={200}
                                                className="card_inner_img"
                                            />

                                        </div>

                                    </div>
                                    <div className="right_card_area">
                                        <div className="right_area_content">
                                            <h3 className='dataType'>Beds</h3>
                                            <p className='price'>From Rs. 8,999</p>
                                            <p className="description">
                                                Wooden Sheet sleepyhead & more
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
            <div className="three_div">
                <div className="inner_three">
                    <ul type="none">
                        <li>
                            7 Days Easy Return</li>
                        <li>Cash On Delivery</li>
                        <li>Low Price</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SwiperSlider;