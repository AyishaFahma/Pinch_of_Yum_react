import React from 'react'
import { faBowlRice, faClock, faSignal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Singlerecipe3() {
  return (
    <>


    <div style={{backgroundImage: "url('https://t3.ftcdn.net/jpg/07/91/20/84/360_F_791208487_FvPUDOvneQYY13BMM4GfG1L55NkdoiQF.jpg')", width:'100%', height:'400px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}} >
        
            </div>
        
            <div className="container">
              <div className="row">
                <div className="col-md-7  px-md-0 px-4 ">
        
                  <div className='px-4 px-md-5 py-5 rounded-5 shadow' >
                    <h1 className='mb-4'>Chicken Biryani</h1>
                    <p className=' text-light-emphasis'>Please follow the given instructions. feel free to experiment on ingredients.
                    Happy cooking !</p>
        
                    <h5 className='mt-5 fs-4'>Ingredients</h5>
                    <ul style={{listStyleType:'circle'}} className='mt-3 text-light-emphasis'>
                      <li>Basmati rice</li>
                      <li>Chicken, cut into pieces</li>
                      <li>Onions, thinly sliced</li>
                      <li>Tomatoes, chopped</li>
                      <li>Yogurt</li>
                      <li>Ginger-garlic paste</li>
                      <li>Biryani masala</li>
                      <li>Green chilies, sliced</li>
                      <li>Fresh coriander leaves</li>
                      <li>Mint leaves</li>
                      <li>Ghee</li>
                      <li>Salt to taste</li>
                    </ul>
        
                    <h5 className='mt-4 fs-4'>Instructions</h5>
                    <p className='text-light-emphasis lh-lg'>
                    Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt.<br />

                    In a pot, sauté sliced onions until golden brown. Remove half for later use.<br />

                    Layer marinated chicken, chopped tomatoes, half of the fried onions, and rice in the pot.<br />

                    Top with ghee, green chilies, fresh coriander leaves, mint leaves, and the remaining fried onions.<br />

                    Cover and cook on low heat until the rice is fully cooked and aromatic. <br />

                    Serve hot, garnished with additional coriander and mint leaves.<br />
                    </p>
        
        
                  </div>
        
                </div>
        
                <div className="col-md-5 px-5 mt-md-0 mt-3">
        
                  <div className='px-4 px-md-5 py-5 rounded-5 shadow-lg' >
        
                    <h5 className='fs-4 mb-4'>About the recipe</h5>
        
                    <p className='text-light-emphasis'><FontAwesomeIcon icon={faClock} className='text-success pe-3 fs-4' />preperation : 30 mins</p>
        
                    <p className='text-light-emphasis'><FontAwesomeIcon icon={faBowlRice} className='text-success pe-3 fs-4'/>cook time : 45 mins</p>
        
                    <p className='text-light-emphasis'><FontAwesomeIcon icon={faUser} className='text-success pe-3 fs-4'/>portions : 6 servings</p>
        
                    <p className='text-light-emphasis'><FontAwesomeIcon icon={faSignal}className='text-success pe-2 fs-4' />difficulty : Medium</p>
        
        
                  </div>
                </div>
              </div>
            </div>
    
    
    </>
  )
}

export default Singlerecipe3