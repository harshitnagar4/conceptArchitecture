import React from 'react'
import card from "../../assets/images/card.jpg";
import { AiOutlineRadiusSetting } from 'react-icons/ai';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { MdOutlinePersonOutline } from 'react-icons/md';
import './secondsection.css'


const SecondSection = () => {
    return (
        <>
            <div className=' d-flex justify-content-center'>
              <div className='row'>
              <div className="card mb-3" style={{ marginTop: "-99px" }}>
                    <div className="row g-0">
                        <div className="col-sm-4 col-lg-4">
                            <img src={card} className="img-fluid rounded-start"  alt="..."  style={{height:'450px', width:"429px"}}/>
                        </div>
                        <div className="col-sm-8 col-lg-8">
                            <div className="card-body mb-4">
                                <h5 className="card-title"><span>---</span> EXPLORE FEATURES</h5>
                                <h2 className="card-text">A Leading Construction Company</h2>
                                <p className="card-text"><small className="text-muted">Concept Construction Group, A Home Construction Services provider company and offer BIM modeling consulting services for designing & engineering projects. We've been working with government organizations, leading developers & corporate organizations for the last 17 years.</small></p>
                            </div>
                        <div className='row d-flex justify-content-center icontextcolor mx-1  mt-4'>
                            <div className='col-sm-6 col-lg-6 mb-4'><AiOutlineRadiusSetting style={{fontSize:"88px"}}/><span className="icontextcolor">All Home solutions </span></div>
                            <div className='col-sm-6 col-lg-6 mb-4'><BiSupport style={{fontSize:"88px"}}/>100%  Technical Support</div>
                            <div className='col-sm-6 col-lg-6'><AiOutlineFundProjectionScreen style={{fontSize:"88px"}}/><span>400+projects in Rajasthan</span></div>
                            <div className='col-sm-6 col-lg-6'><MdOutlinePersonOutline style={{fontSize:"88px"}}/>400+ clients</div>
                        </div>
                        </div>
                    </div>
                </div>
              </div>
              
            </div>
        </>
    )
}

export default SecondSection

{/* <div className='d-flex'>
<div className='col-md-4'>
    <span><GrServices /></span><span>All Discipline
        Under One Roof</span>
</div>
<div className='col-md-4'>
<span><GrServices /></span><span>All Discipline
        Under One Roof</span>
</div>
</div> */}