import React from 'react'
import about from '../../assets/images/about.PNG'
import { BsGlobe } from 'react-icons/bs';
import { SiReactos } from 'react-icons/si';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { FaPeopleArrows } from 'react-icons/fa';
import './about.css'
const Aboutus = () => {
    return (
        <>
           <div className='bg-secondary-subtle my-4'>
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
                            <div className="text-overlay">
                                <div className="pos-text">
                                    <div className="number-years">17</div>
                                    <span>Years Of Trust <br /> And Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
                 {/* start statistics */}
                 <div className='row' style={{marginTop:"6rem" , marginBottom:"6rem"}}>
                    <div className='col-md-4 d-flex' style={{justifyContent:'space-between'}}>
                    <span className="flaticon-computer" style={{fontSize:'90px' , marginTop:'-20px' , color:'#0b5394'}}><AiOutlineFundProjectionScreen/></span>
                        <div className='state-Item d-flex flex-column'>
                        <div className="count" data-from="1" data-to="1800" data-speed="3000" style={{fontSize:"4rem"}}>1800</div>
                        <p className="fs-4 text-secondary">Projects Completed</p>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex' style={{justifyContent:'space-between'}}>
                    <span className="flaticon-computer" style={{fontSize:'90px' , marginTop:'-20px' , color:'#0b5394'}}><FaPeopleArrows/></span>
                        <div className='state-Item d-flex flex-column'>
                        <div className="count" data-from="1" data-to="1800" data-speed="3000" style={{fontSize:"4rem"}}>500+</div>
                        <p className="fs-4 text-secondary">Clients In Rajasthan</p>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex' style={{justifyContent:'space-between'}}>
                    <span className="flaticon-computer" style={{fontSize:'90px' , marginTop:'-20px' , color:'#0b5394'}}><SlCalender/></span>
                        <div className='state-Item d-flex flex-column'>
                        <div className="count" data-from="1" data-to="1800" data-speed="3000" style={{fontSize:"4rem"}}>15</div>
                        <p className="fs-4 text-secondary">Years Of Experiences</p>
                        </div>
                    </div>
                 </div>
            </div>
           </div>
            
        </>
    )
}

export default Aboutus

