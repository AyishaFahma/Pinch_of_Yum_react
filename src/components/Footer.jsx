import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <>

    {/* first footer sec */}

    <div className="container">
      <div className="row  my-5 ">
        
        <div className="col-md-6 mt-5">

          <div >

            <h2 className=''> <img src='https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-grocery-list-vector-png-image_7011627.png' alt='' width={'80px'} height={'80px'}/>

            <span className='ms-3'>Pinch 
              <span className='text-success'> of Yum</span>
            </span>

            </h2>

            <p style={{textAlign:'justify'}}>Explore a treasure trove of culinary inspiration with our wide range of recipes, carefully crafted to tantalize your taste buds and ignite your passion for cooking.</p>

          </div>

        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center mt-5">

          <div className='w-100'>

            <form action="">
              <input type="text" placeholder='Enter your Email' className='p-3 border-dark w-75' />
              <button className='p-3 bg-dark text-light w-25'>Subscribe</button>
            </form>

            <p className='text-left mt-4'>Join the 10,000+ persons that choose healthy food</p>

          </div>

        </div>

        
      </div>
    </div>

    {/* line br */}
    <hr className='m-5' />

    {/* second footer content */}

    <div className="container mb-5">
      <div className="row">

        <div className="col-md-4 d-md-flex align-items-center justify-content-center flex-column">

          <h6 className='fw-bold'>Pinch of Yum</h6>
          <ul className='list-unstyled lh-lg text-secondary ms-md-5 ms-0'>
            <li>About</li>
            <li>Contact</li>
            <li>Office</li>
            <li>Media mentions</li>
            <li>sponsored content</li>
          </ul>
        </div>

        <div className="col-md-4 d-md-flex align-items-center justify-content-center flex-column ">

          <h6 className='fw-bold'>Food & Recipes</h6>
          <ul className='list-unstyled lh-lg text-secondary  ms-md-5 ms-0'>
            <li>Sugar Free January</li>
            <li>freezer Meals</li>
            <li>Quick and easy recipes</li>
            <li>Instant Pot Recipes</li>
            <li>Pasta Recipes</li>
          </ul>

        </div>
        <div className="col-md-4 d-md-flex align-items-center justify-content-center flex-column">

          <p className='fw-bold'>Get in touch with us</p>
          
            <ul className='list-unstyled d-flex '>
              <li><FontAwesomeIcon icon={faFacebook} className='fa-2x m-3' /></li>
              <li><FontAwesomeIcon icon={faSquareInstagram} className='fa-2x m-3'/></li>
              <li><FontAwesomeIcon icon={faTwitter} className='fa-2x m-3 '/></li>
              <li><FontAwesomeIcon icon={faYoutube} className='fa-2x m-3'/></li>
              
            </ul>
          
        </div>

      </div>
    </div>

    {/* copyright */}

    <div className='bg-dark text-light p-5'>
      <h6>Copyright © Pinch of Yum | Designed by Bootstrap Templates - Powered by Ayisha Fahma</h6>
    </div>
    
    </>
  )
}

export default Footer