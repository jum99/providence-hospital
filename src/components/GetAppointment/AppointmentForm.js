import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

import './AppointmentForm.css';

const AppointmentForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [appointment, setAppointment] = useState([]);

    const emailData = sessionStorage.getItem('email');

    const onSubmit = data => {
        const appointmentDetails = {
            name: loggedInUser.displayName,
            email: emailData,
            shipment: data,
            "status": 'PENDING',
            time: new Date().toLocaleString()
        };
        setAppointment(appointmentDetails)

        if (data) {
            alert('You Have Appointmented Successfully')
            history.push('/home')
        }
    };


    return (
        <>
            <div className="container appointment">
                <div className="row">
                    <div className="col-md-6">
                        <div className="service-form">
                            <h1 className="appointment-title">Book Your Appointment</h1>
                            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input type="text" value={sessionStorage.getItem('displayName')} {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}

                                </div>

                                <div className="form-group">
                                    <input type="email" value={sessionStorage.getItem('email')} {...register("email", { required: true })} placeholder="Email" className="form-control" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <input type="number" {...register("phone", { required: true })} placeholder="Phone Number" className="form-control" />
                                    {errors.phone && <span className="text-danger">This field is required</span>}
                                </div>

                                <div class="form-group">

                                    <select className="form-control" {...register("service", { required: true })} ><br />
                                        {errors.service && <span className="error">This field is required</span>}
                                        <option selected disabled>Select Your Service</option>
                                        <option>Ultrasonography</option>
                                        <option>Chamber</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input type="date" {...register("date", { required: true })} placeholder="Date" className="form-control" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group row">
                                    <div className="col-4">

                                        <select className="form-control" {...register("gender", { required: true })}>
                                            <option disabled={true} value="Not set">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Not set">Other</option>
                                        </select>
                                        {errors.gender && <span className="text-danger">This field is required</span>}

                                    </div>
                                    <div className="col-4">
                                        <input {...register("age", { required: true })} className="form-control" placeholder="Your Age" type="number" />
                                        {errors.age && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="col-4">
                                        <input {...register("weight", { required: true })} className="form-control" placeholder="Weight" type="number" />
                                        {errors.weight && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>

                                <div className="form-group ">
                                    <button type="submit" className="btn btn-danger d-block mx-auto px-5 mt-5">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="colmd-6">
                        <div className="appointment-item-two-right">
                            <div className="appointment-item-content">
                                <h2 className="working">Working Hour</h2>
                                <ul>
                                    <li>
                                        <p>Saturday <span className="ml-5">9.00 am - 8.00 pm</span> </p>
                                    </li>
                                    <li>
                                        <p>Sunday <span className="ml-5">9.00 am - 8.00 pm</span> </p>
                                    </li>
                                    <li>
                                        <p>Monday <span className="ml-5">9.00 am - 8.00 pm</span> </p>
                                    </li>
                                    <li>
                                        <p>Tuesday <span className="ml-5">9.00 am - 8.00 pm</span> </p>
                                    </li>
                                    <li>
                                        <p>Wednesday <span className="ml-4">9.00 am - 8.00 pm</span> </p>
                                    </li>
                                    <li>
                                        <p>Thursday<span className="ml-5">9.00 am - 8.00 pm</span> </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentForm;