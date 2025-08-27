// "use client"
// import React from 'react';
// // import "../../../public/sass/pages/products.scss";
// import { Col, Container, Row } from 'react-bootstrap';
// // import Swiper from 'swiper';
// import Image from 'next/image';
// import suit from "../../../public/Images/product_girl.webp";
// import "../../../public/sass/pages/products.scss";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../.../../../../public/sass/pages/swiper_slider.scss";
// import MenTrouser from "../../../public/Images/MenTrousers.webp";
// import sleeprs from "../../../public/Images/sleepers.webp";
// import watch from "../../../public/Images/watches.webp";
// import toys from "../../../public/Images/toys_product.webp";
// import phone from "../../../public/Images/phones.webp";
// import earphone from "../../../public/Images/earphone.webp";
// const Products = () => {
//     return (
//         <section className="products">
//             <Container>
//                 <Row>
//                     <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
//                         <div className="ineer_products">
//                             <h3 className='Products_type'>Men, Women, Kids & More</h3>

//                             <Swiper
//                                 modules={[Navigation, Pagination, Autoplay]}
//                                 spaceBetween={20}
//                                 slidesPerView={5}
//                                 navigation
//                                 className="product_Swiper"
//                                 // pagination={{ clickable: true }}
//                                 // autoplay={{ delay: 3000 }}
//                                 breakpoints={{
//                                     640: { slidesPerView: 2 },
//                                     768: { slidesPerView: 3 },
//                                     1024: { slidesPerView: 4 },
//                                 }}
//                             >
//                                 <SwiperSlide>

//                                     <div className="product_type">
//                                         <div className="product_img">
//                                             <Image src={suit} alt=".." title=".." fetchPriority='low' height={185} width={185} />
//                                         </div>
//                                         <div className="product_content">
//                                             <h3 className='product_name'>Kid's Ethnic Sets</h3>
//                                             <p className="price_discount">Min. 50% Off</p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                                 <SwiperSlide>

//                                     <div className="product_type">
//                                         <div className="product_img">
//                                             <Image src={MenTrouser} alt=".." title=".." fetchPriority='low' height={185} width={185} />
//                                         </div>
//                                         <div className="product_content">
//                                             <h3 className='product_name'> Men's Trouser</h3>
//                                             <p className="price_discount">Min. 45% Off</p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                                 <SwiperSlide>

//                                     <div className="product_type">
//                                         <div className="product_img">
//                                             <Image src={sleeprs} alt=".." title=".." fetchPriority='low' height={185} width={185} />
//                                         </div>
//                                         <div className="product_content">
//                                             <h3 className='product_name'>Men’s Slippers & Flip Flops</h3>
//                                             <p className="price_discount">Min. 70% Off</p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                                 <SwiperSlide>

//                                     <div className="product_type">
//                                         <div className="product_img">
//                                             <Image src={watch} alt=".." title=".." fetchPriority='low' height={185} width={185} />
//                                         </div>
//                                         <div className="product_content">
//                                             <h3 className='product_name'>Wrist Watches</h3>
//                                             <p className="price_discount">Min. 90% Off</p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                                 <SwiperSlide>

//                                     <div className="product_type">
//                                         <div className="product_img">
//                                             <Image src={toys} alt=".." title=".." fetchPriority='low' height={185} width={185} />
//                                         </div>
//                                         <div className="product_content">
//                                             <h3 className='product_name'>Soft Toys</h3>
//                                             <p className="price_discount">Min. 70% Off</p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                                 <SwiperSlide>

//                                     <div className="product_type">
//                                         <div className="product_img">
//                                             <Image src={phone} alt=".." title=".." fetchPriority='low' height={185} width={185} />
//                                         </div>
//                                         <div className="product_content">
//                                             <h3 className='product_name'>Smart Phone</h3>
//                                             <p className="price_discount">Min. 5% Off</p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                                 <SwiperSlide>

//                                     <div className="product_type">
//                                         <div className="product_img">
//                                             <Image src={earphone} alt=".." title=".." fetchPriority='low' height={185} width={185} />
//                                         </div>
//                                         <div className="product_content">
//                                             <h3 className='product_name'>Earburds</h3>
//                                             <p className="price_discount">Min. 10% Off</p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             </Swiper>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section >
//     )
// }

// export default Products;




"use client"
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../../public/sass/pages/products.scss";
import "../../../public/sass/pages/swiper_slider.scss";

import suit from "../../../public/Images/product_girl.webp";
import MenTrouser from "../../../public/Images/MenTrousers.webp";
import sleeprs from "../../../public/Images/sleepers.webp";
import watch from "../../../public/Images/watches.webp";
import toys from "../../../public/Images/toys_product.webp";
import phone from "../../../public/Images/phones.webp";
import earphone from "../../../public/Images/earphone.webp";

const Products = () => {
    return (
        <section className="products">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="ineer_products">
                            <h3 className="Products_type">Men, Women, Kids & More</h3>

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={5}
                                navigation
                                loop={true}
                                className="product_Swiper"
                                breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 10 },
                                    576: { slidesPerView: 2, spaceBetween: 10 },
                                    768: { slidesPerView: 3, spaceBetween: 15 },
                                    992: { slidesPerView: 4, spaceBetween: 15 },
                                    1200:{ slidesPerView: 5, spaceBetween: 20 },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="product_type">
                                        <div className="product_img">
                                            <Image src={suit} alt="Kid's Ethnic Sets" title="Kid's Ethnic Sets" height={185} width={185} />
                                        </div>
                                        <div className="product_content">
                                            <h3 className="product_name">Kid's Ethnic Sets</h3>
                                            <p className="price_discount">Min. 50% Off</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="product_type">
                                        <div className="product_img">
                                            <Image src={MenTrouser} alt="Men's Trouser" title="Men's Trouser" height={185} width={185} />
                                        </div>
                                        <div className="product_content">
                                            <h3 className="product_name">Men's Trouser</h3>
                                            <p className="price_discount">Min. 45% Off</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="product_type">
                                        <div className="product_img">
                                            <Image src={sleeprs} alt="Slippers" title="Slippers" height={185} width={185} />
                                        </div>
                                        <div className="product_content">
                                            <h3 className="product_name">Slippers & Flip Flops</h3>
                                            <p className="price_discount">Min. 70% Off</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="product_type">
                                        <div className="product_img">
                                            <Image src={watch} alt="Wrist Watch" title="Wrist Watch" height={185} width={185} />
                                        </div>
                                        <div className="product_content">
                                            <h3 className="product_name">Wrist Watches</h3>
                                            <p className="price_discount">Min. 90% Off</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="product_type">
                                        <div className="product_img">
                                            <Image src={toys} alt="Soft Toys" title="Soft Toys" height={185} width={185} />
                                        </div>
                                        <div className="product_content">
                                            <h3 className="product_name">Soft Toys</h3>
                                            <p className="price_discount">Min. 70% Off</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="product_type">
                                        <div className="product_img">
                                            <Image src={phone} alt="Smart Phone" title="Smart Phone" height={185} width={185} />
                                        </div>
                                        <div className="product_content">
                                            <h3 className="product_name">Smart Phone</h3>
                                            <p className="price_discount">Min. 5% Off</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="product_type">
                                        <div className="product_img">
                                            <Image src={earphone} alt="Earbuds" title="Earbuds" height={185} width={185} />
                                        </div>
                                        <div className="product_content">
                                            <h3 className="product_name">Earbuds</h3>
                                            <p className="price_discount">Min. 10% Off</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Products
