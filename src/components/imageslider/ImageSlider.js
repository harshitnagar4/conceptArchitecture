import React from 'react'
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import './slider.css'
const ImageSlider = () => {
    return (
        <>
            <section >
                <div id="carouselExample" className="carousel slide" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slide1} className="d-block w-100" alt="..." style={{ height: "700px" }} />
                            <div className="header-text hidden-xs">
                                <div className='container'>
                                    <div className='row d-flex justify-content-center'>
                                        <div className="col-md-8 text">
                                            <h2 className=''>
                                                <span>Best Solutions For All Your<strong>Home</strong>Requirements</span>
                                            </h2>
                                            <p className='' style={{color:"#377f8b"}}>
                                                <span>Whether it is a small or a large Buildings, every home needs to have the
                                                    optimum building operations and maintenance optimization support</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slide2} className="d-block w-100" alt="..." style={{ height: "700px" }} />
                            <div className="header-text hidden-xs">
                                <div className='container'>
                                    <div className='row d-flex justify-content-center'>
                                        <div className="col-md-8 ">
                                            <h2>
                                                <span>Trusted Home Solution <strong>For All Discipline</strong>Requirements</span>
                                            </h2>
                                            <p>
                                                <span>A World Class Engineering Home Design Services For Residential, Commercial And Industrial Buildings With An Impressive Range Of Skills And Resources.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slide3} className="d-block w-100" alt="..." style={{ height: "700px" }} />
                            <div className="header-text hidden-xs">
                                <div className='container'>
                                    <div className='row d-flex justify-content-center'>
                                        <div className="col-md-8 text">
                                            <h2>
                                                <span>We Make Great <strong>Home With Full OfSatisfaction</strong></span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default ImageSlider

