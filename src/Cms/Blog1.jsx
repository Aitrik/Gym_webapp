import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBlogDetails } from '../Redux/AuthSlice'
import { blogpic, productProfile } from '../Redux/Helper'


export default function Blog1() {
    const blogdetails = useSelector((state) => state.Auth.blogDet)
    const { id } = useParams("id")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBlogDetails(id))
    })
    return (
        <main>
            {/*? Hero Start */}
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 pt-70 text-center">
                                    <h2>Blog Details</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero End */}
            {/*? Blog Area Start */}
            <section className="blog_area single-post-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post">
                                <div className="feature-img">
                                    <img
                                        className="img-fluid"
                                        src={blogpic(blogdetails.image)}
                                        alt=""
                                    />
                                </div>
                                <div className="blog_details">
                                    <h2 style={{ color: "#2d2d2d" }}>
                                        {blogdetails.title}
                                    </h2>
                                    
                                    <p className="excert">
                                        {blogdetails.subtitle}
                                    </p>
                                    <p>
                                        {blogdetails.content}
                                    </p>

                                </div>

                            </div>
                        </div>
                       
                       

                    </div>

                </div>
            </section>
            {/* Blog Area End */}
        </main>

    )
}
