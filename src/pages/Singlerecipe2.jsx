import { faBowlRice, faClock, faSignal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Singlerecipe2() {
  return (
    <>

    <div style={{backgroundImage: "url('https://cdn.loveandlemons.com/wp-content/uploads/2024/08/chocolate-chip-cookie-recipe.jpg')", width:'100%', height:'400px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}} >
    
        </div>
    
        <div className="container">
          <div className="row">
            <div className="col-md-7  px-md-0 px-4 ">
    
              <div className='px-4 px-md-5 py-5 rounded-5 shadow' >
                <h1 className='mb-4'>Chocolate Chip Cookies</h1>
                <p className=' text-light-emphasis'>Please follow the given instructions. feel free to experiment on ingredients.
                Happy cooking !</p>
    
                <h5 className='mt-5 fs-4'>Ingredients</h5>
                <ul style={{listStyleType:'circle'}} className='mt-3 text-light-emphasis'>
                  <li>All-purpose flour</li>
                  <li>Butter, softened</li>
                  <li>Brown sugar</li>
                  <li>White sugar</li>
                  <li>Eggs</li>
                  <li>Vanilla extract</li>
                  <li>Baking soda</li>
                  <li>Salt</li>
                  <li>Chocolate chips</li>
                </ul>
    
                <h5 className='mt-4 fs-4'>Instructions</h5>
                <p className='text-light-emphasis lh-lg'>
                Preheat the oven to 350°F (175°C) <br />
                In a bowl, cream together softened butter, brown sugar, and white sugar. <br />
                Beat in eggs one at a time, then stir in vanilla extract.<br />
                Combine flour, baking soda, and salt. Gradually add to the wet ingredients. <br />
                Fold in chocolate chips. <br />
                Drop rounded tablespoons of dough onto ungreased baking sheets <br />
                Bake for 10-12 minutes or until edges are golden brown. <br />
                Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack.
                </p>
    
    
              </div>
    
            </div>
    
            <div className="col-md-5 px-5 mt-md-0 mt-3">
    
              <div className='px-4 px-md-5 py-5 rounded-5 shadow-lg' >
    
                <h5 className='fs-4 mb-4'>About the recipe</h5>
    
                <p className='text-light-emphasis'><FontAwesomeIcon icon={faClock} className='text-success pe-3 fs-4' />preperation : 15 mins</p>
    
                <p className='text-light-emphasis'><FontAwesomeIcon icon={faBowlRice} className='text-success pe-3 fs-4'/>cook time : 10 mins</p>
    
                <p className='text-light-emphasis'><FontAwesomeIcon icon={faUser} className='text-success pe-3 fs-4'/>portions : 24 servings</p>
    
                <p className='text-light-emphasis'><FontAwesomeIcon icon={faSignal}className='text-success pe-2 fs-4' />difficulty : Easy</p>
    
    
              </div>
            </div>
          </div>
        </div>
    
    
    </>
  )
}

export default Singlerecipe2