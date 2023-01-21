import React from 'react'
import logo from "../../assets/images/logo.png"
import "./headerSection2.css"
import { GiHamburgerMenu } from 'react-icons/gi';
const HeaderSection2 = () => {
  return (
    <> 
    <div className='container'>
<div className='row'>
<div className='col-md-3'>
    <img src={logo} height="65px"/>
   </div>
   <div className='col-md-9'>
   <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3 headertext">
          <a className="nav-link active" aria-current="page" href="#" style={{color:"#117b9b"}}>HOME</a>
        </li>
        <li className="nav-item mx-3 headertext">
          <a className="nav-link active" aria-current="page" href="#">SERVICE</a>
        </li>
        <li className="nav-item mx-3 headertext">
          <a className="nav-link active" aria-current="page" href="#">PROJECT</a>
        </li>
        <li className="nav-item mx-3 headertext">
          <a className="nav-link active" aria-current="page" href="#">BLOG</a>
        </li>
        <li className="nav-item mx-3 headertext">
          <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
        </li>
        <li className="nav-item mx-3 headertext" style={{backgroundColor:"#86d1e5"}}>
          <a className="nav-link active headertext" aria-current="page" href="#">REQUEST A QUOTE</a>
        </li>
        <li className="nav-item mx-3 headertext">
          <a className="nav-link active" aria-current="page" href="#"><GiHamburgerMenu/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </div>
</div>

    </div>
    </>
  )
}

export default HeaderSection2