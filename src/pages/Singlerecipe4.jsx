import React from 'react'
import { faBowlRice, faClock, faSignal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Singlerecipe4() {
  return (
    <>
    
    
        <div style={{backgroundImage: "url('https://www.lisashealthykitchen.com/wp-content/uploads/Quinoa-Salad-with-Avocado-and-Mango.jpg')", width:'100%', height:'400px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}} >
            
                </div>
            
                <div className="container">
                  <div className="row">
                    <div className="col-md-7  px-md-0 px-4 ">
            
                      <div className='px-4 px-md-5 py-5 rounded-5 shadow' >
                        <h1 className='mb-4'>Quinoa Salad with Avocado</h1>
                        <p className=' text-light-emphasis'>Please follow the given instructions. feel free to experiment on ingredients.
                        Happy cooking !</p>
            
                        <h5 className='mt-5 fs-4'>Ingredients</h5>
                        <ul style={{listStyleType:'circle'}} className='mt-3 text-light-emphasis'>
                          <li>Quinoa, cooked</li>
                          <li>Avocado, diced</li>
                          <li>Cherry tomatoes, halved</li>
                          <li>Cucumber, diced</li>
                          <li>Red bell pepper, diced</li>
                          <li>Feta cheese, crumbled</li>
                          <li>Lemon vinaigrette dressing</li>
                          <li>Salt and pepper to taste</li>
                          
                        </ul>
            
                        <h5 className='mt-4 fs-4'>Instructions</h5>
                        <p className='text-light-emphasis lh-lg'>
                        In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.<br />
    
                        Drizzle with lemon vinaigrette dressing and toss to combine.<br />
    
                        Season with salt and pepper to taste.<br />
    
                        Chill in the refrigerator before serving.<br />
    
                        </p>
            
            
                      </div>
            
                    </div>
            
                    <div className="col-md-5 px-5 mt-md-0 mt-3">
            
                      <div className='px-4 px-md-5 py-5 rounded-5 shadow-lg' >
            
                        <h5 className='fs-4 mb-4'>About the recipe</h5>
            
                        <p className='text-light-emphasis'><FontAwesomeIcon icon={faClock} className='text-success pe-3 fs-4' />preperation : 10 mins</p>
            
                        <p className='text-light-emphasis'><FontAwesomeIcon icon={faBowlRice} className='text-success pe-3 fs-4'/>cook time : 10 mins</p>
            
                        <p className='text-light-emphasis'><FontAwesomeIcon icon={faUser} className='text-success pe-3 fs-4'/>portions : 3 servings</p>
            
                        <p className='text-light-emphasis'><FontAwesomeIcon icon={faSignal}className='text-success pe-2 fs-4' />difficulty : Easy</p>
            
            
                      </div>
                    </div>
                  </div>
                </div>
        
        </>
  )
}

export default Singlerecipe4