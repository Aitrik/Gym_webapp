import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { book, servicedetails } from "../Redux/AuthSlice";


export default function BookNow() {
  const { id } = useParams();
  console.log(id, "id");
  const username = localStorage.getItem("name");
  const useremail = localStorage.getItem("email");
  const userId = localStorage.getItem("id");
  console.log(username);

  const [user, setUser] = useState({
    name: "",
    email: "",
    memberId: "",
    serviceId: "",
    serviceName: "",
    scheme: "",
    price: "",
  });
  const { serDet } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(servicedetails(id));
  }, [id]);

  useEffect(() => {
    setUser({
      serviceName: serDet.service_name,
      name: username,
      email: useremail,
      memberId: userId,
      serviceId: id,
    });
  }, []);

  let name, value;
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "scheme") {
      setUser({ ...user, scheme: value });
    }
    if (name === "price") {
      setUser({ ...user, price: value });
    }
  };

  const SubmitInfo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("memberId", user.memberId)
    formData.append("serviceId", user.serviceId);
    formData.append("serviceName", user.serviceName);
    formData.append("scheme", user.scheme);
    formData.append("price", user.price);
    dispatch(book(formData))
  };

  console.log(user);

  // console.log(oneServiceDetails.service_name, "onedetails");
  return (

    <>
     <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 text-center pt-70">
                                    <h2>Book Training</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
      <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-0">
            <div className="col-1">
              {/* <img
                src="/img/background-site.jpg"
                className="img-fluid h-100 w-100 rounded-start"
                style={{ objectFit: "cover", opacity: "0.7" }}
                alt=""
              /> */}
            </div>
            <div className="col-10">
              <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                <div className="text-center">
                  <h1 className="display-5 mb-5">Book Now</h1>
                </div>
                <div className="row g-4 form" style={{ flexDirection: "column" }}>
                  <div className="col-lg-4 col-md-6 mx-auto">
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      className="form-control border-primary p-2"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 mx-auto">
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      className="form-control border-primary p-2"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 mx-auto">
                    <input
                      type="text"
                      name="service_name"
                      value={user.serviceName}
                      className="form-control border-primary p-2"
                      placeholder="Enter Your Service Name"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 mx-auto">
                    <input
                      type="text"
                      name="scheme"
                      value={user.scheme}
                      onChange={PostUserData}
                      className="form-control border-primary p-2"
                      placeholder="Enter Your Scheme"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 mx-auto">
                    <input
                      type="text"
                      name="price"
                      onChange={PostUserData}
                      className="form-control border-primary p-2"
                      placeholder="Enter Your Price"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      onClick={SubmitInfo}
                      className="btn btn-primary px-5 py-3 rounded-pill"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1">
              {/* <img
                src="/img/background-site.jpg"
                className="img-fluid h-100 w-100 rounded-end"
                style={{ objectFit: "cover", opacity: "0.7" }}
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
