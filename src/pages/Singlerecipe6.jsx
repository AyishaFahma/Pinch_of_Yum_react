import React from 'react'
import { faBowlRice, faClock, faSignal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Singlerecipe6() {
  return (
    <>

      <div style={{ backgroundImage: "url('https://www.qasralbaharshj.com/wp-content/uploads/2024/11/Dosa-Recipe-3.jpg')", width: '100%', height: '400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} >

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-7  px-md-0 px-4 ">

            <div className='px-4 px-md-5 py-5 rounded-5 shadow' >
              <h1 className='mb-4'>South Indian Masala Dosa</h1>
              <p className=' text-light-emphasis'>Please follow the given instructions. feel free to experiment on ingredients.
                Happy cooking !</p>

              <h5 className='mt-5 fs-4'>Ingredients</h5>
              <ul style={{ listStyleType: 'circle' }} className='mt-3 text-light-emphasis'>
                <li>Dosa batter (fermented rice and urad dal batter)</li>
                <li>Potatoes, boiled and mashed</li>
                <li>Onions, finely chopped</li>
                <li>Mustard seeds</li>
                <li>Cumin seeds</li>
                <li>Curry leaves</li>
                <li>Turmeric powder</li>
                <li>Green chilies, chopped</li>
                <li>Ghee</li>
                <li>Coconut chutney for serving</li>

              </ul>

              <h5 className='mt-4 fs-4'>Instructions</h5>
              <p className='text-light-emphasis lh-lg'>
                In a pan, heat ghee and add mustard seeds, cumin seeds, and curry leaves.<br />

                Add chopped onions, green chilies, and turmeric powder. Sauté until onions are golden brown.<br />

                Mix in boiled and mashed potatoes. Cook until well combined and seasoned..<br />

                Spread dosa batter on a hot griddle to make thin pancakes.<br />

                Place a spoonful of the potato mixture in the center, fold, and serve hot. <br />

                Pair with coconut chutney for a delicious South Indian meal.

              </p>


            </div>

          </div>

          <div className="col-md-5 px-5 mt-md-0 mt-3">

            <div className='px-4 px-md-5 py-5 rounded-5 shadow-lg' >

              <h5 className='fs-4 mb-4'>About the recipe</h5>

              <p className='text-light-emphasis'><FontAwesomeIcon icon={faClock} className='text-success pe-3 fs-4' />preperation : 10 mins</p>

              <p className='text-light-emphasis'><FontAwesomeIcon icon={faBowlRice} className='text-success pe-3 fs-4' />cook time : 20 mins</p>

              <p className='text-light-emphasis'><FontAwesomeIcon icon={faUser} className='text-success pe-3 fs-4' />portions : 4 servings</p>

              <p className='text-light-emphasis'><FontAwesomeIcon icon={faSignal} className='text-success pe-2 fs-4' />difficulty : Medium</p>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Singlerecipe6