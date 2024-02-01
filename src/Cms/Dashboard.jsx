import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsf } from '../Redux/AuthSlice';
import { useParams } from 'react-router-dom';
import Bookinglist from './Bookinglist';

export default function Dashboard() {
  const email = localStorage.getItem("email");
  const firstName = localStorage.getItem("name");


  return (
    <>
      <main>
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 text-center pt-70">
                    <h2>My Dashboard</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
               <h2>UserName: {firstName}</h2>
                <h2>Email: {email}</h2>
               </div>
        
        <Bookinglist />
      </main>
    </>
  );
}
