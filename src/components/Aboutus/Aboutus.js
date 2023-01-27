import React from 'react'
import about from '../../assets/images/about.PNG'
import { BsGlobe } from 'react-icons/bs';
import { SiReactos } from 'react-icons/si';
import './about.css'
const Aboutus = () => {
    return (
        <>
            <div className='container'>
                <div className='row position-relative' >
                    <div className='col-md-6'>
                        <div className='border-bottom'>
                            <h6>---- ABOUT US </h6>
                            <h1 className='text-c'>Get Solution For All Your Home Requirements.</h1>
                            <p>Concept Architecture provides engineering design and project management for residential & commercial building types, Industries and offer world class building engineering services globally with an impressive range of skills and resources. We have gained an outstanding reputation for our lateral thinking and elegant design solutions in many aspects of building engineering, including multistory buildings, hospitals,  etc.</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 d-flex'>
                                <span style={{fontSize:'65px',color:'#0b5394'}} className='about_two_icon'><BsGlobe /></span><h1 className="p-2 mt-4 text-c">Our Mission</h1>
                            </div>
                            <div className='col-md-6 d-flex'>
                                <span style={{fontSize:'65px' , color:'#0b5394'}}><SiReactos /></span><h1 className="p-2 mt-4 text-c">Our Vision</h1>
                            </div>
                            <div className='col-md-6 d-flex justify-content-end '>
                              <div  style={{width:'75%'}}><p className='text-secondary fs-5'>To provide the best quality output in a given time with 100% satisfaction of our clients</p></div>
                            </div>
                            <div className='col-md-6 d-flex justify-content-end'>
                              <div  style={{width:'75%'}}><p className='text-secondary fs-5'>To provide the best quality output in a given time with 100% satisfaction of our clients</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 overlay-about d-block m-auto '>
                        <div className='about-img-two'>
                            <img src={about} height="400px" className='d-block m-auto' />
                            <div class="text-overlay">
                                <div class="pos-text">
                                    <div class="number-years">17</div>
                                    <span>Years Of Trust <br /> And Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus

