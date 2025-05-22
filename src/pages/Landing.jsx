import React from 'react'
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



function Landing() {
    return (
        <>
            {/* landing intro */}
            <div className="container-fluid my-4">
                <div className="row bg-body-secondary">
                    <div className="col-md-1"></div>
                    <div className="col-md-6 my-md-5  d-flex align-items-center justify-content-center " style={{ textAlign: 'justify' }}>

                        <div>
                            <h1 className='text-success mt-3 fw-bold'>Welcome to Pinch of Yum</h1>

                            <h4 className='mb-4'>Let’s talk food <span className='text-secondary' style={{ fontFamily: "Dancing Script", fontSize: '40px' }}>shall we?</span></h4>

                            <p className='lh-lg fst-italic fs-5 text-secondary'>Well, we hope that’s why you’re here. Our recipes are designed for real, actual, every day life, and we try to focus on real foods and healthy recipes (which honestly means a lot of different things to us, including the perfect chocolate chip cookie and cheese on cheese on cheese, because health is all about balance, right?).</p>
                            <p className='lh-lg fst-italic fs-5 text-secondary'>This is the place to find those recipes — everything from our most popular, to meal prep, to Instant Pot recipes, or if you just, like, have some sad greens in your fridge to use up and you need some inspiration.</p>
                            <p className='lh-lg fst-italic fs-5 text-secondary'>You’re here! Have fun. We hope you find something (many things) you love.</p>
                        </div>

                    </div>
                    <div className="col-md-4 my-5 d-flex align-items-center justify-content-center">

                        <img src="https://i.postimg.cc/85L7S7Km/Pik-Png-com-indian-png-2723544.png" alt="no image" className='w-100 w-75' />
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

            {/* cards sec */}

            <h2 className='mt-5 text-center'>Simple recipes made for <span className='text-secondary' style={{ fontFamily: "Dancing Script", fontSize: '50px' }}> real, actual, everyday life.</span></h2>


            <div className="container my-5">
                <div className="row ">
                    <div className="col-md-3 d-flex align-items-center justify-content-center mb-4">

                        <Card style={{ width: '100%',border:'0' }} >
                            <Card.Img variant="top" src="https://www.recipetineats.com/uploads/2024/02/Lemon-garlic-salmon-tray-bake_1.jpg" height={'450px'} />
                            <Card.Body>
                                
                                <h4 className="position-absolute bottom-0 start-50 translate-middle-x bg-warning text-white fw-bold py-2 px-5 rounded" >Dinner</h4>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center mb-4">

                        <Card style={{ width: '100%' ,border:'0'}}>
                            <Card.Img variant="top" src="https://img.freepik.com/free-photo/caesar-salad-with-fried-shrimps_140725-6065.jpg?semt=ais_hybrid&w=740" height={'450px'}/>
                            <Card.Body>
                                
                                <h4 className="position-absolute bottom-0 start-50 translate-middle-x bg-warning text-white fw-bold py-2 px-5 rounded" >Healthy</h4>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center mb-4">

                        <Card style={{ width: '100%', border:'0' }}>
                            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" height={'450px'} />
                            <Card.Body>
                                
                               <h4 className="position-absolute bottom-0 start-50 translate-middle-x bg-warning text-white fw-bold py-2 px-5 rounded" >Popular</h4>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center mb-4">
                        <Card style={{ width: '100%' ,border:'0' }}>
                            <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/394/707/831/dessert-4k-high-resolution-picture-wallpaper-preview.jpg" height={'450px'} />
                            <Card.Body>
                                
                                <h4 className="position-absolute bottom-0 start-50 translate-middle-x bg-warning text-white fw-bold py-2 px-5 rounded" >Dessert</h4>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>



            {/* circle div sec */}

           <div className='d-flex align-items-center justify-content-center m-md-0 m-4 p-4 overflow-auto overflow-md-visible' >


            <div style={{width:'150px' , height:'150px', borderRadius:'50%'}} className=' m-4 shadow-lg'>

                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/04/Beef-Skillet-Supper_EXPS_SDFM18_13165_C10_11_3b.jpg?w=700" alt="" style={{width:'150px' , height:'150px', borderRadius:'50%'}} />

                <h5 className='text-center mt-2'>QUICK AND EASY</h5>

            </div>

            <div style={{width:'150px' , height:'150px', borderRadius:'50%'}} className=' m-4 shadow-lg'>

                <img src="https://w0.peakpx.com/wallpaper/780/28/HD-wallpaper-delicious-meal-meal-lunch-delicious-food-meat-salad.jpg" alt="" style={{width:'150px' , height:'150px', borderRadius:'50%'}}/>

                <h5 className='text-center mt-2'>DINNER</h5>
            </div>

            <div style={{width:'150px' , height:'150px', borderRadius:'50%'}} className=' m-4 shadow-lg'>

                <img src="https://img.freepik.com/free-photo/quinoa-mushrooms-lettuce-red-cabbage-spinach-cucumbers-tomatoes-buddha-bowl_127032-1989.jpg?semt=ais_hybrid&w=740" alt="" style={{width:'150px' , height:'150px', borderRadius:'50%'}}/>

                <h5 className='text-center mt-2'>VEGETARIAN</h5>
            </div>


            <div style={{width:'150px' , height:'150px', borderRadius:'50%'}} className=' m-4 shadow-lg'>

                <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?cs=srgb&dl=pexels-janetrangdoan-1092730.jpg&fm=jpg" alt="" style={{width:'150px' , height:'150px', borderRadius:'50%'}} />

                <h5 className='text-center mt-2'>HEALTHY</h5>
            </div>

            <div style={{width:'150px' , height:'150px', borderRadius:'50%'}} className=' m-4 shadow-lg'>

                <img src="https://media.istockphoto.com/id/1092632852/photo/vegetable-soup.jpg?s=612x612&w=0&k=20&c=TLMWC8lshitbk8pONGpblEsmcsBy1wZVQ9jJC92Cvh4=" alt="" style={{width:'150px' , height:'150px', borderRadius:'50%'}}/>

                <h5 className='text-center mt-2'>SOUPS</h5>
            </div>

            <div style={{width:'150px' , height:'150px', borderRadius:'50%'}} className=' m-4 shadow-lg'>

                <img src="https://t3.ftcdn.net/jpg/02/97/13/58/360_F_297135896_Y9HQ2k7WRIWj55l7LMSB6zQBh3KJ7aBV.jpg" alt="" style={{width:'150px' , height:'150px', borderRadius:'50%'}}/>

                <h5 className='text-center mt-2'>SALADS</h5>
            </div>

            <div style={{width:'150px' , height:'150px', borderRadius:'50%'}} className=' m-4 shadow-lg'>

                <img src="https://w0.peakpx.com/wallpaper/692/125/HD-wallpaper-indian-delicacy-breakfast-desi-dinner-homemade-indian-meal-khici-lunch-rice-dish-spices-tasty-thumbnail.jpg" alt="" style={{width:'150px' , height:'150px', borderRadius:'50%'}}/>

                <h5 className='text-center mt-2'>LUNCH</h5>
            </div>

            



           </div>


           {/* search field */}

           <div className="container my-5 ">
            <div className="row ">
                <div className="col-md-1"></div>
                <div className="col-md-6  ">

                    <div className='border border-dark rounded-5'>
                        <button className='btn fs-4 w-100 border-0'><FontAwesomeIcon icon={faMagnifyingGlass}  />
                        <input type="text" placeholder='Search our Recipe' className='p-1 ms-5 w-75 border-0 '/></button>
                        
                    </div>


                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center mt-3 mt-md-0">
                    <div className='border border-warning rounded-5 bg-warning text-center w-75'>
                        <Link to={'/recipe'}><button className='btn w-100 p-3 border-0 fs-5 text-light'> <FontAwesomeIcon icon={faPlus} className='fs-4 pe-2 '/>View All Recipes</button></Link>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
           </div>



        </>
    )
}

export default Landing