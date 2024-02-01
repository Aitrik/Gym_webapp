import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailsf } from '../Redux/AuthSlice';
import { blogpic } from '../Redux/Helper';

export default function Bookinglist() {
    const dispatch = useDispatch();
    const id = localStorage.getItem("id");
    
    const { details } = useSelector(state => state.Auth);

    useEffect(() => {
        dispatch(detailsf(id));
    }, []);

    return (

        <div className='container'>
            <div className='row' style={{ display: "flex", justifyContent: "center" }}>
             
                {details.map((item, index) => (
                    <div key={index} className='col-md-4' style={{ margin: '10px' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={blogpic(item.serviceId.image)} style={{ width: "400px", height: "350px", marginBottom: '10px' }} alt={`Service ${index + 1}`} />
                            <h3>Name:{item.serviceId.service_name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
