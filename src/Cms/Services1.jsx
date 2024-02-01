import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { servicedetails } from '../Redux/AuthSlice'
import { blogpic } from '../Redux/Helper'
import { Link } from 'react-router-dom'

export default function Services1() {
    const { id } = useParams("id")
    const dispatch = useDispatch()
    const servicedet = useSelector(state => state.Auth.serDet)
    console.log(servicedet)
    useEffect(() => {
        dispatch(servicedetails(id))
    }, [])


    return (
        <main>
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 text-center pt-70">
                                    <h2>Service Details</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container" style={{ marginTop: "30px", marginLeft: "60px", maxWidth: "1200px" }}>
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12 d-flex">
                        <div className="single-cat single-cat2 text-center mb-50">
                            <div className="cat-icon">
                                <img src={blogpic(servicedet.image)} style={{ width: "100%", height: "auto" }} alt="Service Image" />
                            </div>
                            <div className="cat-cap">
                                <h2 style={{ fontSize: "30px" }}>
                                    <a>{servicedet.service_name}</a>
                                </h2>
                                <p>
                                    {servicedet.service_description}
                                </p>
                            </div>

                            <button className="btn btn-primary" type="submit" style={{ height: "30px", marginRight: "10px" }}>
                                <Link to={`/book/${servicedet._id}`}>Book</Link>
                            </button>

                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
