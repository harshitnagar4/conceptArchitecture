import React from 'react'
import { TiSocialLinkedin } from 'react-icons/ti';
import { CgFacebook } from 'react-icons/cg';
import { CiYoutube  } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import './headerSection1.css'

const HeaderSection1 = () => {
  return (
<>
<nav className='border-bottom'>
<div className='container'>
<div className='row'>
    <div className='col-md-9 d-flex ' style={{paddingTop:"10px"}}>
      <p>concept@gmail.com | <span> <BsTelephone/></span> 1234567890</p>
    </div>
    <div className='col-md-3  d-flex ' style={{paddingTop:"10px"}}>
      <span className='iconborder'><TiSocialLinkedin style={{fontSize: '22px',paddingLeft:'3px'}}/></span>
      <span className='mx-2 iconborder'><CgFacebook style={{fontSize: '22px',paddingLeft:'3px'}}/></span><span className='mx-2 iconborder'><CiYoutube style={{fontSize: '22px',paddingLeft:'3px'}}/></span> 
    </div>
  </div>
</div>
</nav>
</>
  )
}

export default HeaderSection1