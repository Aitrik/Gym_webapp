import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { banner } from '../Redux/AuthSlice'
import { blogpic } from '../Redux/Helper'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function About() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const bannerlist = useSelector(state => state.Auth.banner)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(banner())
    }, [])
    console.log(bannerlist)
    return (
        <main>
            {/*? Hero Start */}
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 text-center pt-70">
                                    <h2>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero End */}
            
                <Slider {...settings} >
                    {bannerlist.map((item, index) => (
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src={blogpic(item.image)} class="d-block w-100" alt="..."/>
                          </div>
                          
                        </div>
                       <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </button>
                      </div>
                    ))}
                </Slider>
            
            {/*? About Area Start */}
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
                                        Safe Body building proper Solutions That Saves our Valuable
                                        Time!
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
            {/* About-2 Area End */}
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
            {/*? About-2 Area Start */}
            <section className="about-area2 testimonial-area section-padding30 fix">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-11 col-sm-11">
                            {/* about-img */}
                            <div className="about-img2">
                                <img src="assets/img/gallery/about2.png" alt="" />
                                {/* Shape */}
                                <div className="shape-qutaion d-none d-sm-block">
                                    <img src="assets/img//gallery/qutaion.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9 col-sm-9">
                            <div className="about-caption">
                                {/* Section Tittle */}
                                <div className="section-tittle mb-55">
                                    <span>Client Feedback</span>
                                    <h2>What Our Client thik about our gym</h2>
                                </div>
                                {/* Testimonial Start */}
                                <div className="h1-testimonial-active">
                                    {/* Single Testimonial */}
                                    <div className="single-testimonial">
                                        <div className="testimonial-caption">
                                            <p>
                                                Brook presents your services with flexible, convenient and
                                                cdpose layouts. You can select your favorite layouts &amp;
                                                elements for cular ts with unlimited ustomization
                                                possibilities. Pixel-perfect replica;ition of thei designers
                                                ijtls intended csents your se.
                                            </p>
                                            <div className="rattiong-caption">
                                                <span>
                                                    Jhon Smith<span>Gym Trainer</span>{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Testimonial */}
                                    <div className="single-testimonial">
                                        <div className="testimonial-caption">
                                            <p>
                                                Brook presents your services with flexible, convenient and
                                                cdpose layouts. You can select your favorite layouts &amp;
                                                elements for cular ts with unlimited ustomization
                                                possibilities. Pixel-perfect replica;ition of thei designers
                                                ijtls intended csents your se.
                                            </p>
                                            <div className="rattiong-caption">
                                                <span>
                                                    Jhon Smith<span>Gym Trainer</span>{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial End */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About-2 Area End */}
            {/*? Want To work */}
            <section className="wantToWork-area w-padding">
                <div className="container">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-lg-6 col-md-9 col-sm-9">
                            <div className="section-tittle">
                                <span>oUR TEAM MAMBERS</span>
                                <h2>Our Most Exprienced Trainers</h2>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <a href="services.html" className="btn wantToWork-btn f-right">
                                More Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Want To work End */}
            {/*? Team Ara Start */}
            <div className="team-area pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="assets/img/gallery/team1.png" alt="" />
                                    <div className="team-caption">
                                        <span>Creative derector</span>
                                        <h3>
                                            <a href="#">Jhon Sunsaev</a>
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
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="assets/img/gallery/team2.png" alt="" />
                                    <div className="team-caption">
                                        <span>Creative derector</span>
                                        <h3>
                                            <a href="#">Jhon Sunsaev</a>
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
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="assets/img/gallery/team3.png" alt="" />
                                    <div className="team-caption">
                                        <span>Creative derector</span>
                                        <h3>
                                            <a href="#">Jhon Sunsaev</a>
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
                    </div>
                </div>
            </div>
            {/* Team Ara End */}
            {/*? Want To work */}
            <section
                className="wantToWork-area w-padding section-bg"
                data-background="assets/img/gallery/section_bg02.png"
            >
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10">
                            <div className="wantToWork-caption">
                                <h2>April membership offer available Now</h2>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <a href="services.html" className="btn wantToWork-btn f-right">
                                More Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Want To work End */}
        </main>

    )
}
