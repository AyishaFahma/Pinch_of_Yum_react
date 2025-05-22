import { faBowlRice, faClock, faSignal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Singlerecipe() {
  return (
    <>

    <div style={{backgroundImage: "url('https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920_e41233d5-dcec-461c-b07e-03245f031dfe.jpg?v=1737105431')", width:'100%', height:'400px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}} >

    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-7  px-md-0 px-4 ">

          <div className='px-4 px-md-5 py-5 rounded-5 shadow' >
            <h1 className='mb-4'>Classic Margherita Pizza</h1>
            <p className=' text-light-emphasis'>Please follow the given instructions. feel free to experiment on ingredients.
            Happy cooking !</p>

            <h5 className='mt-5 fs-4'>Ingredients</h5>
            <ul style={{listStyleType:'circle'}} className='mt-3 text-light-emphasis'>
              <li >Pizza dough</li>
              <li>Tomato sauce</li>
              <li>Fresh mozzarella cheese</li>
              <li>Fresh basil leaves</li>
              <li>Olive oil</li>
              <li>Salt and pepper to taste</li>
            </ul>

            <h5 className='mt-4 fs-4'>Instructions</h5>
            <p className='text-light-emphasis lh-lg'>Preheat the oven to 475°F (245°C) <br />
            Roll out the pizza dough and spread tomato sauce evenly. <br />
            Top with slices of fresh mozzarella and fresh basil  leaves. <br />Drizzle with olive oil and season with salt and pepper. <br />Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. <br />Slice and serve hot.</p>


          </div>

        </div>

        <div className="col-md-5 px-5 mt-md-0 mt-3">

          <div className='px-4 px-md-5 py-5 rounded-5 shadow-lg' >

            <h5 className='fs-4 mb-4'>About the recipe</h5>

            <p className='text-light-emphasis'><FontAwesomeIcon icon={faClock} className='text-success pe-3 fs-4' />preperation : 20 mins</p>

            <p className='text-light-emphasis'><FontAwesomeIcon icon={faBowlRice} className='text-success pe-3 fs-4'/>cook time : 15 mins</p>

            <p className='text-light-emphasis'><FontAwesomeIcon icon={faUser} className='text-success pe-3 fs-4'/>portions : 4 servings</p>

            <p className='text-light-emphasis'><FontAwesomeIcon icon={faSignal}className='text-success pe-2 fs-4' />difficulty : Easy</p>


          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Singlerecipe