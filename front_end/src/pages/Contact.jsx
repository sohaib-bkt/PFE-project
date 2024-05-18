import { useState } from 'react';
import SectionStart from "@Components/SectionStart";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axiosClient from '../api/axios';

export default function Contact() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        phone: '',
        commentaire: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosClient.post('http://localhost:8000/api/contact/store', formData);
            alert('Message sent successfully!');
            setFormData({
                nom: '',
                prenom: '',
                email: '',
                phone: '',
                commentaire: ''
            })
        } catch (error) {
            // Handle error response
            console.error(error);
        }
    };

    return (
        <>
            <SectionStart title="Contact Us" activeBreadcrumb="Contact Us"/>
      
            <section className="contact-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-7">
                            <div className="materialContainer">
                                <div className="material-details">
                                    <div className="title title1 title-effect mb-1 title-left">
                                        <h2>Contact Us</h2>
                                        <p className="ms-0 w-100">
                                            Your email address will not be published. Required fields are marked *
                                        </p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4 mt-md-1 mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor="nom" className="form-label">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nom"
                                                name="nom"
                                                placeholder="Enter Your First Name"
                                                required
                                                value={formData.nom}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="prenom" className="form-label">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="prenom"
                                                name="prenom"
                                                placeholder="Enter Your Last Name"
                                                required
                                                value={formData.prenom}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Enter Your Email Address"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="phone" className="form-label">
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                placeholder="Enter Your Phone Number"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="commentaire" className="form-label">
                                                Comment
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="commentaire"
                                                name="commentaire"
                                                rows={5}
                                                required
                                                value={formData.commentaire}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary" style={{borderRadius:'6px' , fontFamily:'monospace' , fontSize:'16px'}}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-details">
                                <div>
                                    <h2>Let's get in touch</h2>
                                    <h5 className="font-light">
                                        We're open for any suggestion or just to have a chat
                                    </h5>
                                    <div className="contact-box">
                                        <div className="contact-icon">
                                            <FaLocationDot />
                                        </div>
                                        <div className="contact-title">
                                            <h4>Address :</h4>
                                            <p>Kenitra , Morocco</p>
                                        </div>
                                    </div>
                                    <div className="contact-box">
                                        <div className="contact-icon">
                                            <FaPhoneAlt />
                                        </div>
                                        <div className="contact-title">
                                            <h4>Phone Number :</h4>
                                            <p>+212 6245362</p>
                                        </div>
                                    </div>
                                    <div className="contact-box">
                                        <div className="contact-icon">
                                            <MdEmail />
                                        </div>
                                        <div className="contact-title">
                                            <h4>Email Address :</h4>
                                            <p>MoonStore@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
