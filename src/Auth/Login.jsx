import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../Redux/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.Auth)
  const navigate=useNavigate()
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    answer: ""

  })
  const [error, seterror] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    answer: "",

  })
  const validation = () => {
    let error = {}

    if (!data.email) {
      error.email = " Email is required";
    }

    if (!data.password) {
      error.password = " Password is required";
    }

    return error
  }
  let name, value
  const valueSetting = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email") {

      if (value.length === 0) {
        setdata({ ...data, email: "" })
        seterror({ ...error, email: "Email is important " })
      }
      else {
        setdata({ ...data, email: value.toLowerCase() })
        seterror({ ...error, email: "" })
      }

    }

    else if (name === "password") {
      if (value.length === 0) {
        setdata({ ...data, password: "" })
        seterror({ ...error, password: "Password is important " })
      }
      else {
        setdata({ ...data, password: value })
        seterror({ ...error, password: "" })
      }
    }

  }
  const submit = (e) => {
    e.preventDefault()
    seterror(validation())
    setdata(data)
    const formData = new FormData()

    formData.append("email", data.email)

    formData.append("password", data.password)

    dispatch(login(formData)).then(() => {
      let token = localStorage.getItem("token");
      let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

      if (token !== null && token !== undefined && token !== "") {
        isInLoginPage && navigate("/services");
      }
    })

  }
  return (
    <main>
      <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap hero-cap2 text-center pt-70">
                  <h2>Welcome Back</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-main mt-100 mb-100">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-7">
              <div className="form-wrapper">
                {/*Section Tittle  */}
                <div className="form-tittle">
                  <div className="row ">
                    <div className="col-lg-11 col-md-10 col-sm-10">
                      <div className="section-tittle">
                        <span>Login Form</span>

                      </div>
                    </div>
                  </div>
                </div>
                {/*End Section Tittle  */}
                <div className="container-md mt-5">
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <form onSubmit={submit} style={{ border: "0.5px solid red", padding: "40px", borderRadius: "20px" }}>
                        <div className="row mb-4">
                          <div className="col-md-6">
                            <label className="form-label" style={{ fontSize: "16px" }}>Email</label>
                            <input type="text" className="form-control" name="email" value={data.email} onChange={valueSetting} placeholder='Enter your email' />
                            <span style={{ color: "red" }}>{error.email}</span>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" style={{ fontSize: "16px" }}>Password</label>
                            <input type="text" className="form-control" name="password" value={data.password} onChange={valueSetting} placeholder='Enter your password' />
                            <span style={{ color: "red" }}>{error.password}</span>
                          </div>
                        </div>

                        <div className="submit-info">
                          {status === "loading" ? (
                            <button className="btn" type="submit">
                              Loading...
                            </button>
                          ) : (
                            <button className="btn" type="submit">
                              Login
                            </button>
                          )}

                          <p> Not a user?<Link style={{ color: "red" }} to="/register">Register</Link></p>

                        </div>
                      </form>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* contact left Img*/}
        <div className="from-left d-none d-lg-block">
          <img src="assets/img/gallery/section_bg03.png" alt="" style={{ height: "500px", width: "600px" }} />
        </div>
      </div>
      {/* Contact form End */}
    </main>


  )
}
