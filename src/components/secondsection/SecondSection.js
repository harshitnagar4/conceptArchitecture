import React from 'react'
import card from "../../assets/images/card.jpg";
import { GrServices } from 'react-icons/gr';
const SecondSection = () => {
    return (
        <>
            <div className='container d-flex justify-content-center'>
                <div className="card mb-3" style={{ width: "70%", marginTop: "-40px" }}>
                    <div className="row g-0">
                        {/* <div className="col-md-4">
                            <img src={card} className="img-fluid rounded-start" alt="..." />
                        </div> */}
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><span>---</span> EXPLORE FEATURES</h5>
                                <h2 className="card-text">A Leading Construction Company</h2>
                                <p className="card-text"><small className="text-muted">Concept Construction Group, A Home Construction Services provider company and offer BIM modeling consulting services for designing & engineering projects. We've been working with government organizations, leading developers & corporate organizations for the last 17 years.</small></p>
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