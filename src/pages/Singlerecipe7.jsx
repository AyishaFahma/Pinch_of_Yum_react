import React from 'react'
import { faBowlRice, faClock, faSignal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Singlerecipe7() {
  return (
    <>

      <div style={{ backgroundImage: "url('https://stewwithsaba.com/wp-content/uploads/2023/04/IMG_9109.jpg')", width: '100%', height: '400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} >

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-7  px-md-0 px-4 ">

            <div className='px-4 px-md-5 py-5 rounded-5 shadow' >
              <h1 className='mb-4'>Chicken Curry</h1>
              <p className=' text-light-emphasis'>Please follow the given instructions. feel free to experiment on ingredients.
                Happy cooking !</p>

              <h5 className='mt-5 fs-4'>Ingredients</h5>
              <ul style={{ listStyleType: 'circle' }} className='mt-3 text-light-emphasis'>
                <li>Chicken, cut into pieces</li>
                <li>Tomatoes, chopped</li>
                <li>Green chilies, sliced</li>
                <li>Ginger, julienned</li>
                <li>Garlic, minced</li>
                <li>Curry leaves</li>
                <li>Turmeric powder</li>
                <li>Fresh coriander leaves</li>
                <li>Coriander powder</li>
                <li>Cumin powder</li>
                <li>Red chili powder</li>
                <li>Garam masala</li>
                <li>Cooking oil</li>
                <li>Salt to taste</li>

              </ul>

              <h5 className='mt-4 fs-4'>Instructions</h5>
              <p className='text-light-emphasis lh-lg'>
                 Heat cooking oil and sauté minced garlic until golden brown.<br />

                Add chicken pieces and cook until browned on all sides.<br />

                Add chopped tomatoes, green chilies, ginger, and spices. Cook until tomatoes are soft.<br />

                Cover and simmer until the chicken is tender and the oil separates from the masala.<br />

                Garnish with fresh coriander leaves and serve hot with naan or rice.

              </p>


            </div>

          </div>

          <div className="col-md-5 px-5 mt-md-0 mt-3">

            <div className='px-4 px-md-5 py-5 rounded-5 shadow-lg' >

              <h5 className='fs-4 mb-4'>About the recipe</h5>

              <p className='text-light-emphasis'><FontAwesomeIcon icon={faClock} className='text-success pe-3 fs-4' />preperation : 20 mins</p>

              <p className='text-light-emphasis'><FontAwesomeIcon icon={faBowlRice} className='text-success pe-3 fs-4' />cook time : 30 mins</p>

              <p className='text-light-emphasis'><FontAwesomeIcon icon={faUser} className='text-success pe-3 fs-4' />portions : 4 servings</p>

              <p className='text-light-emphasis'><FontAwesomeIcon icon={faSignal} className='text-success pe-2 fs-4' />difficulty : Medium</p>


            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Singlerecipe7