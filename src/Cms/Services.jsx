import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { services } from '../Redux/AuthSlice'
import { blogpic } from '../Redux/Helper'
import { Link } from 'react-router-dom'

export default function Services() {
    const dispatch=useDispatch()
    const service=useSelector(state=>state.Auth.services)
    console.log(service)

    useEffect(()=>{
        dispatch(services())
    },[])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    return (
        <main>
            {/*? Hero Start */}
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 text-center pt-70">
                                    <h2>our Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero End */}
            {/*? Services Area Start */}
            <section className="services-area pt-100 pb-150">
                {/*? Want To work */}
                <section className="wantToWork-area w-padding">
                    <div className="container">
                        <div className="row align-items-end justify-content-between">
                            <div className="col-lg-6 col-md-10 col-sm-10">
                                <div className="section-tittle">
                                    <span>oUR sERVICES FOR YOU</span>
                                    <h2>PUSH YOUR LIMITS FORWARD We Offer to you</h2>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </section>
                {/* Want To work End */}
                
                    <div className="container">
                    <div className="row">
                      {service.map((item)=>(
                        <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-cat single-cat2 text-center mb-50">
                            <div className="cat-icon">
                               <img src={blogpic(item.image)} style={{width:"500px",height:"380px"}}/>
                            </div>
                            <div className="cat-cap">
                                <h5>
                                    <a href="services.html">{item.service_name}T</a>
                                </h5>
                                <p>
                                    {truncate(item.service_description,150)}
                                </p>
                            </div>
                            
                               <button className="btn" type="submit" style={{height:"30px",marginRight:"10px"}}>
                                <Link to={item._id}>
                                    See Details
                                </Link>
                               
                               </button>
                               
                            
                        </div>
                    </div>
                      ))}  
                       
                    </div>
                </div>
                
            </section>
            {/* Services Area End */}
        </main>

    )
}
