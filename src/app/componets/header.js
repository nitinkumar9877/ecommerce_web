"use client"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "../../../public/sass/pages/header.scss"
import webLogo from "../../../public/Images/meeshoLogo.svg"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import mobiles from "../../../public/Images/mobile.webp";
import men from "../../../public/Images/men.png";
import ethicWear from "../../../public/Images/kids-Photoroom.png";
import electroinc from "../../../public/Images/electronics.webp";
import homeDecorate from "../../../public/Images/Home.png";
import women from "../../../public/Images/women.png";
import Dropdown from 'react-bootstrap/Dropdown';
const Header = () => {
    library.add(fas, far)
    return (
        <section className="header">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="inner_div_header">
                            <div className="left_header">
                                <div className="logo_img">
                                    <Image src={webLogo} alt="logo" title="logo" fetchPriority="high" />
                                </div>
                            </div>
                            <div className="right_header">
                                <div className="right_left_Search">
                                    <div className="Search_div_bar">
                                        <FontAwesomeIcon icon={["fas", "search"]} className="searchIcon" />
                                        {/* <label htmlFor="searchBar" className="searchBar"> */}
                                        <input id="searchBar" type="text" placeholder="Search For Products, Brands and More..." />
                                        {/* </label> */}
                                    </div>
                                </div>
                                <div className="right_right_Btn">
                                    <div className="Login_Div">
                                        <Link href="#" className="LoginBtn">
                                            <FontAwesomeIcon icon={["fas", "user"]} className="userIcon" />
                                            Login
                                            <FontAwesomeIcon icon={["fas", "arrow-down"]} className="arrowIcon" />
                                        </Link>
                                        <div className="ul_parent_hover">
                                            <ul type="none">
                                                <li>
                                                    <Link href="#" className="SignUp">New User? <span>SignUp</span></Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="myProfile">
                                                        <FontAwesomeIcon icon={["fas", "user"]} className="profileIcon" />My Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="order">
                                                        <FontAwesomeIcon icon={["far", "square"]} className="orderIcon" />
                                                        Orders
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="myProfile">
                                                        <FontAwesomeIcon icon={["far", "heart"]} className="wishlistIcon" />
                                                        Wishlist
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="myProfile">
                                                        <FontAwesomeIcon icon={["fas", "gifts"]} className="giftIcon" />
                                                        Gift card
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card_div">
                                        <Link href="#" className="cardBtn">
                                            <FontAwesomeIcon icon={["fas", "cart-arrow-down"]} className="cardIcon" />
                                            Cart
                                        </Link>
                                    </div>
                                    <div className="bar_div">
                                        <FontAwesomeIcon icon={["fas", "bars"]} className="baricon" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="nav_div">
                            <nav>
                                <ul type="none">
                                    <li>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Women Ethnic
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    saare
                                                    {/* <Dropdown drop="end">
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            Sarees
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Sarees</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Kurta sets</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Kurtis</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Dupatta Sets</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Suits & Dress Material</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Lehenges</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Other's Ethnic</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown> */}
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#/action-3">Kurta sets</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Kurtis</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Dupatta Sets</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Suits & Dress Material</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Lehenges</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Other's Ethnic</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Women Westtern
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Toppwear</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">InnerWear</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Bottom Wear</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Sleepwear</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Maternity Wear</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Sports Wear</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Men
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Top Wear</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Bottom Wear</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Men Accesories</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Men Footwear</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Ethnic Wear</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Inner & Sleep Wear</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Kids
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Boys & Girls 2+ Years</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Infant 0-2 Years</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Toys & Accesssories</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Baby Care</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Home & Kitchen
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Kitchen & Applianaces</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Home Furnishing</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Home Decor</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Kitchen & Dinning</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Home Improvement</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Beauty & Health
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Make Uo</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Skin care</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Baby & Mom</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Mens Care</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Health Care</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Jawellery & Accessories
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Jawellery</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Men Accessories</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Women Accessory</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header
