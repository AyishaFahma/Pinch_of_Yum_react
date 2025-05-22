import React from 'react'
import { faBowlRice, faClock, faSignal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Singlerecipe5() {
  return (
    <>
    
        
            <div style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/10/72/34/01/360_F_1072340103_rXOOQpcPClNfoutZeJeW08PyNpQNDcnO.jpg')", width:'100%', height:'400px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}} >
                
                    </div>
                
                    <div className="container">
                      <div className="row">
                        <div className="col-md-7  px-md-0 px-4 ">
                
                          <div className='px-4 px-md-5 py-5 rounded-5 shadow' >
                            <h1 className='mb-4'>Mango Lassi</h1>
                            <p className=' text-light-emphasis'>Please follow the given instructions. feel free to experiment on ingredients.
                            Happy cooking !</p>
                
                            <h5 className='mt-5 fs-4'>Ingredients</h5>
                            <ul style={{listStyleType:'circle'}} className='mt-3 text-light-emphasis'>
                              <li>Ripe mango, peeled and diced</li>
                              <li>Yogurt</li>
                              <li>Honey / Sugar</li>
                              <li>Milk</li>
                              <li>Cardamom powder</li>
                              <li>Ice cubes</li>
                              
                            </ul>
                
                            <h5 className='mt-4 fs-4'>Instructions</h5>
                            <p className='text-light-emphasis lh-lg'>
                            In a blender, combine diced mango, yogurt, milk, honey, and cardamom powder.<br />
        
                            Blend until smooth and creamy.<br />
        
                            Add ice cubes and blend again until the lassi is chilled.<br />
        
                            Pour into glasses and garnish with a sprinkle of cardamom.<br />

                            Enjoy this refreshing Mango Lassi!
        
                            </p>
                
                
                          </div>
                
                        </div>
                
                        <div className="col-md-5 px-5 mt-md-0 mt-3">
                
                          <div className='px-4 px-md-5 py-5 rounded-5 shadow-lg' >
                
                            <h5 className='fs-4 mb-4'>About the recipe</h5>
                
                            <p className='text-light-emphasis'><FontAwesomeIcon icon={faClock} className='text-success pe-3 fs-4' />preperation : 10 mins</p>
                
                            <p className='text-light-emphasis'><FontAwesomeIcon icon={faBowlRice} className='text-success pe-3 fs-4'/>cook time : 0 mins</p>
                
                            <p className='text-light-emphasis'><FontAwesomeIcon icon={faUser} className='text-success pe-3 fs-4'/>portions : 2 servings</p>
                
                            <p className='text-light-emphasis'><FontAwesomeIcon icon={faSignal}className='text-success pe-2 fs-4' />difficulty : Easy</p>
                
                
                          </div>
                        </div>
                      </div>
                    </div>
            
    </>
  )
}

export default Singlerecipe5