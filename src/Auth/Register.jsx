import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../Redux/AuthSlice'
import { Link } from 'react-router-dom'
export default function Register() {
    const [img, setImage] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { status } = useSelector(state => state.Auth)
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
        if (!data.name) {
            error.name = " Firstname is required";
        }
        if (!data.email) {
            error.email = " Email is required";
        }
        if (!data.phone) {
            error.phone = " Phone is required";
        }
        if (!data.password) {
            error.password = " Password is required";
        }
        if (!data.answer) {
            error.answer = "Answer is important"
        }

        return error
    }
    let name, value
    const valueSetting = (e) => {
        name = e.target.name;
        value = e.target.value;
        if (name === "name") {
            if (value.length === 0) {
                setdata({ ...data, name: "" })
                seterror({ ...error, name: "First Name is important " })
            }
            else {
                setdata({ ...data, name: value })
                seterror({ ...error, name: "" })
            }

        }
        else if (name === "email") {

            if (value.length === 0) {
                setdata({ ...data, email: "" })
                seterror({ ...error, email: "Email is important " })
            }
            else {
                setdata({ ...data, email: value.toLowerCase() })
                seterror({ ...error, email: "" })
            }

        }
        else if (name === "phone") {
            if (value.length === 0) {
                setdata({ ...data, phone: "" })
                seterror({ ...error, phone: "Last Name is important " })
            }
            else {
                setdata({ ...data, phone: value })
                seterror({ ...error, phone: "" })
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
        else if (name === "answer") {
            if (value.length === 0) {
                setdata({ ...data, answer: "" })
                seterror({ ...error, answer: "Answer is important " })
            }
            else {
                setdata({ ...data, answer: value })
                seterror({ ...error, answer: "" })
            }
        }

    }

    const submit = (e) => {
        e.preventDefault()
        seterror(validation())
        setdata(data)
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("phone", data.phone)
        formData.append("password", data.password)
        formData.append("answer", data.answer)
        formData.append("image", img)
        dispatch(register(formData))

    }
    return (
        <main>

            <div class="slider-area2">
                <div class="slider-height2 d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="hero-cap hero-cap2 text-center pt-70">
                                    <h2>New Members Register</h2>
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
                                                <span>SignUp Form</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Section Tittle  */}
                                <div className="container-md mt-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-8">
                                            <form onSubmit={submit} style={{ border: "0.5px solid red", padding: "40px", borderRadius: "20px" }}>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <label className="form-label" style={{ fontSize: "16px" }}>Name</label>
                                                        <input type="text" className="form-control" name="name" value={data.name} onChange={valueSetting} placeholder='Enter your name' />
                                                        <span style={{ color: "red" }}>{error.name}</span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label" style={{ fontSize: "16px" }}>Email</label>
                                                        <input type="text" className="form-control" name="email" value={data.email} onChange={valueSetting} placeholder='Enter your email' />
                                                        <span style={{ color: "red" }}>{error.email}</span>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <label className="form-label" style={{ fontSize: "16px" }}>Phone No</label>
                                                        <input type="number" className="form-control" name="phone" value={data.phone} onChange={valueSetting} placeholder='Enter number' />
                                                        <span style={{ color: "red" }}>{error.phone}</span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label" style={{ fontSize: "16px" }}>Password</label>
                                                        <input type="password" className="form-control" name="password" value={data.password} onChange={valueSetting} placeholder='Enter password' />
                                                        <span style={{ color: "red" }}>{error.password}</span>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" style={{ fontSize: "16px" }}>Answer</label>
                                                    <textarea type="text" className="form-control" name="answer" value={data.answer} onChange={valueSetting} placeholder='Enter your answer' />
                                                    <span style={{ color: "red" }}>{error.answer}</span>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" style={{ fontSize: "16px" }}>Image</label>
                                                    <input type="file" className="form-control" name="img" onChange={(e) => setImage(e.target.files[0])} />
                                                </div>
                                                {status=="loading"?(
                                                    <button type="submit" className="btn btn-danger">Loading..</button>
                                                ):(
                                                    <button type="submit" className="btn btn-danger">Submit</button>
                                                )}
                                                <p> Already a user?<Link style={{ color: "red" }} to="/login">Login</Link></p>
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
                    <img src="assets/img/gallery/contact_form.png" alt=""  style={{height:"700px"}}/>
                </div>
            </div>
            {/* Contact form End */}
        </main>


    )
}
