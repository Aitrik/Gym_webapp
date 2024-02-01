import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Team, Testimonials } from '../Redux/AuthSlice'
import { blogpic } from '../Redux/Helper'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const dispatch = useDispatch()
    const custdata = useSelector(state => state.Auth.review)
    console.log(custdata)
    const team = useSelector(state => state.Auth.team)
    console.log(team)

    useEffect(() => {
        dispatch(Testimonials())
    }, [])

    useEffect(() => {
        dispatch(Team())
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            {/*? slider Area Start*/}
            <div className="slider-area position-relative">
                <div className="slider-active">
                    {/* Single Slider */}
                    <div className="single-slider slider-height d-flex align-items-center" >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                                    <div className="hero__caption">
                                        <span data-animation="fadeInLeft" data-delay="0.1s">
                                            with patrick potter
                                        </span>
                                        <h1 data-animation="fadeInLeft" data-delay="0.4s">
                                            Build Perfect body Shape for good and Healthy life.
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Single Slider */}

                </div>
                {/* Video icon */}
                <div className="video-icon">
                    <a
                        className="popup-video btn-icon"
                        href="https://github.com/Aitrik?tab=repositories"
                    >
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "20px" }} />
                    </a>
                </div>
            </div>
            {/* slider Area End*/}

            <section className="about-area section-padding30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            {/* about-img */}
                            <div className="about-img ">
                                <img src="assets/img/gallery/about.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-caption">
                                {/* Section Tittle */}
                                <div className="section-tittle section-tittle3 mb-35">
                                    <span>ABOUT oUR GYM</span>
                                    <h2>
                                        Safe Body building proper Solutions That Saves our Valuable Time!
                                    </h2>
                                </div>
                                <p className="pera-top">
                                    Brook presents your services with flexible, convenient and cdpose
                                    layouts. You can select your favorite layouts &amp; elements for
                                    cular ts with unlimited ustomization possibilities. Pixel-perfect
                                    replication of the designers is intended.
                                </p>
                                <p className="mb-65 pera-bottom">
                                    Brook presents your services with flexible, convefnient and chient
                                    anipurpose layouts. You can select your favorite layouts.
                                </p>
                                <a href="from.html" className="btn">
                                    became a member
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <>

                <h1 style={{ fontSize: "50px" }}>Client Feedback</h1>
                <section className="about-area2 testimonial-area section-padding30 fix" style={{ marginLeft: "60px" }}>
                    <div className="container">
                        <Slider {...settings}>
                            {custdata.map((item, index) => (
                                <div key={index} className="row" style={{ display: "flex" }}>
                                    <div className="col-lg-5 col-md-11 col-sm-11">
                                        <div className="about-img2">
                                            <img src={blogpic(item.image)} alt="" />
                                            <div className="shape-qutaion d-none d-sm-block">
                                                <img src="assets/img//gallery/qutaion.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-9 col-sm-9">
                                        <div className="about-caption">
                                            <div className="section-tittle mb-55"></div>
                                            <div className="h1-testimonial-active">
                                                <div className="single-testimonial">
                                                    <div className="testimonial-caption">
                                                        <p>{item.review}</p>
                                                        <div className="rattiong-caption">
                                                            <span>{item.client_name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </section>

                <>
                    {/*? Gallery Area Start */}
                    <div className="gallery-area">
                        <div className="container-fluid p-0 fix">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="box snake mb-30">
                                        <div
                                            className="gallery-img big-img"
                                            style={{
                                                backgroundImage: "url(assets/img/gallery/gallery1.png)"
                                            }}
                                        />
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <a href="gallery.html">
                                                    <i className="ti-arrow-top-right" />
                                                </a>
                                                <h3>Best fitness gallery</h3>
                                                <p>Fitness, Body</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="box snake mb-30">
                                                <div
                                                    className="gallery-img small-img"
                                                    style={{
                                                        backgroundImage: "url(assets/img/gallery/gallery2.png)"
                                                    }}
                                                />
                                                <div className="overlay">
                                                    <div className="overlay-content">
                                                        <a href="gallery.html">
                                                            <i className="ti-arrow-top-right" />
                                                        </a>
                                                        <h3>Best fitness gallery</h3>
                                                        <p>Fitness, Body</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="box snake mb-30">
                                                <div
                                                    className="gallery-img small-img"
                                                    style={{
                                                        backgroundImage: "url(assets/img/gallery/gallery3.png)"
                                                    }}
                                                />
                                                <div className="overlay">
                                                    <div className="overlay-content">
                                                        <a href="gallery.html">
                                                            <i className="ti-arrow-top-right" />
                                                        </a>
                                                        <h3>Best fitness gallery</h3>
                                                        <p>Fitness, Body</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="box snake mb-30">
                                                <div
                                                    className="gallery-img small-img"
                                                    style={{
                                                        backgroundImage: "url(assets/img/gallery/gallery4.png)"
                                                    }}
                                                />
                                                <div className="overlay">
                                                    <div className="overlay-content">
                                                        <a href="gallery.html">
                                                            <i className="ti-arrow-top-right" />
                                                        </a>
                                                        <h3>Best fitness gallery</h3>
                                                        <p>Fitness, Body</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="box snake mb-30">
                                                <div
                                                    className="gallery-img small-img"
                                                    style={{
                                                        backgroundImage: "url(assets/img/gallery/gallery5.png)"
                                                    }}
                                                />
                                                <div className="overlay">
                                                    <div className="overlay-content">
                                                        <a href="gallery.html">
                                                            <i className="ti-arrow-top-right" />
                                                        </a>
                                                        <h3>Best fitness gallery</h3>
                                                        <p>Fitness, Body</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gallery Area End */}
                    <h1>Our Team</h1>
                    <div className="team-area pb-150">
                        <div className="container">
                            <div className="row">
                                {team.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="single-team mb-30">
                                            <div className="team-img">
                                                <img src={blogpic(item.image)} style={{ height: "400px" }} alt="" />
                                                <div className="team-caption">
                                                    <span>{item.name}</span>
                                                    <h3>
                                                        <a href="#">{item.speciality}</a>
                                                    </h3>
                                                    {/* Blog Social */}
                                                    <div className="team-social">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fab fa-facebook-f" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fab fa-twitter" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fas fa-globe" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fab fa-instagram" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </>


            </>


        </>

    )
}
