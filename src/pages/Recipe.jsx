import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSignal, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Recipe() {
  return (
    <>

      {/* recipe button sec */}

      <div className="container my-md-5 my-4">
        <div className="row">
          <div className="col-md-6 mt-md-5">

            <h1 className='fs-2'>All recipes</h1>
            <p >Explore a treasure trove of culinary inspiration with our wide range of recipes, carefully crafted to tantalize your taste buds and ignite your passion for cooking.</p>
          </div>

          <div className="col-md-6 mt-md-5 d-flex align-items-center justify-content-center">

            <div className=' d-flex flex-column flex-md-row  justify-content-between'>
              <button className='btn btn-dark px-4 mx-3 my-2 my-md-0'>All</button>
              <button className='btn btn-dark px-4 mx-3'>Breakfast</button>
              <button className='btn btn-dark px-4 mx-3 my-2 my-md-0'>Lunch</button>
              <button className='btn btn-dark px-4 mx-3'>Dinner</button>
              <button className='btn btn-dark px-4 mx-3 my-2 my-md-0'>Dessert</button>
            </div>
          </div>
        </div>
      </div>

      {/* recipe cards */}

      <div className="container">
        <div className="row">
          <div className="col-md-3">

            {/* card */}

            <Link to={'/Singlerecipe1'} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '100%', cursor: 'pointer' }} className='shadow border-0 mt-4'>
                <Card.Img variant="top" src="https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920_e41233d5-dcec-461c-b07e-03245f031dfe.jpg?v=1737105431" style={{ height: '240px' }} className='position-relative ' />
                <button className='position-absolute top-0 end-0 m-3 px-3 btn btn-dark'>Dinner</button>
                <Card.Body>
                  <Card.Title className='fs-3'>Classic Margherita Pizza</Card.Title>
                  <Card.Text>
                    Pizza , Italian
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush border-0">

                  <ListGroup.Item className='border-0'><span className='text-success'>4.6 </span><FontAwesomeIcon icon={faStar} bounce className='text-success' /> (98)</ListGroup.Item>
                  <ListGroup.Item>Easy <FontAwesomeIcon icon={faSignal} bounce className='text-success' /></ListGroup.Item>

                </ListGroup>

                <div className='mx-3 mt-3 bg-success ' style={{ height: '2px' }} ></div>

                <Card.Body className='d-flex justify-content-between'>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faClock} className='text-success fs-4 pe-2' /> 20 min</Card.Text>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faUser} className='text-success fs-4 pe-1' /> 4 servings</Card.Text>
                </Card.Body>
              </Card>
            </Link>



          </div>
          <div className="col-md-3">

            <Link to={'/Singlerecipe2'} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '100%', cursor: 'pointer' }} className='shadow border-0  mt-4'>
                <Card.Img variant="top" src="https://cdn.loveandlemons.com/wp-content/uploads/2024/08/chocolate-chip-cookie-recipe.jpg" style={{ height: '240px' }} className='position-relative ' />
                <button className='position-absolute top-0 end-0 m-3 px-3 btn btn-dark'>Snack,Dessert</button>
                <Card.Body>
                  <Card.Title className='fs-3'>Chocolate Chip Cookies</Card.Title>
                  <Card.Text>
                    Cookies, Dessert, Baking
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush border-0">

                  <ListGroup.Item className='border-0'><span className='text-success'>4.9 </span><FontAwesomeIcon icon={faStar} bounce className='text-success' /> (13)</ListGroup.Item>
                  <ListGroup.Item>Easy <FontAwesomeIcon icon={faSignal} bounce className='text-success' /></ListGroup.Item>

                </ListGroup>

                <div className='mx-3 mt-3 bg-success ' style={{ height: '2px' }} ></div>

                <Card.Body className='d-flex justify-content-between'>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faClock} className='text-success fs-4 pe-2' /> 15 min</Card.Text>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faUser} className='text-success fs-4 pe-1' /> 24 servings</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="col-md-3">

            <Link to={'/Singlerecipe3'} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '100%', cursor: 'pointer' }} className='shadow border-0  mt-4'>
                <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/07/91/20/84/360_F_791208487_FvPUDOvneQYY13BMM4GfG1L55NkdoiQF.jpg" style={{ height: '240px' }} className='position-relative ' />
                <button className='position-absolute top-0 end-0 m-3 px-3 btn btn-dark'>Lunch ,Dinner</button>
                <Card.Body>
                  <Card.Title className='fs-3'>Chicken Biryani</Card.Title>
                  <Card.Text>
                    Biryani, Chicken, Main course, Indian, Pakistani, Asian
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush border-0">

                  <ListGroup.Item className='border-0'><span className='text-success'>5 </span><FontAwesomeIcon icon={faStar} bounce className='text-success' /> (32)</ListGroup.Item>
                  <ListGroup.Item>Medium <FontAwesomeIcon icon={faSignal} bounce className='text-success' /></ListGroup.Item>

                </ListGroup>

                <div className='mx-3 mt-3 bg-success ' style={{ height: '2px' }} ></div>

                <Card.Body className='d-flex justify-content-between'>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faClock} className='text-success fs-4 pe-2' /> 30 min</Card.Text>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faUser} className='text-success fs-4 pe-1' /> 6 servings</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-md-3">

            <Link to={'/Singlerecipe4'} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '100%', cursor: 'pointer' }} className='shadow border-0  mt-4'>
                <Card.Img variant="top" src="https://www.lisashealthykitchen.com/wp-content/uploads/Quinoa-Salad-with-Avocado-and-Mango.jpg" style={{ height: '240px' }} className='position-relative ' />
                <button className='position-absolute top-0 end-0 m-3 px-3 btn btn-dark'>Lunch,Side Dish</button>
                <Card.Body>
                  <Card.Title className='fs-3'>Quinoa Salad with Avocado</Card.Title>
                  <Card.Text>
                    Salad, Quinoa
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush border-0">

                  <ListGroup.Item className='border-0'><span className='text-success'>4.4 </span><FontAwesomeIcon icon={faStar} bounce className='text-success' /> (59)</ListGroup.Item>
                  <ListGroup.Item>Easy <FontAwesomeIcon icon={faSignal} bounce className='text-success' /></ListGroup.Item>

                </ListGroup>

                <div className='mx-3 mt-3 bg-success ' style={{ height: '2px' }} ></div>

                <Card.Body className='d-flex justify-content-between'>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faClock} className='text-success fs-4 pe-2' /> 10 min</Card.Text>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faUser} className='text-success fs-4 pe-1' /> 3 servings</Card.Text>
                </Card.Body>
              </Card>
            </Link>

          </div>

          {/* example */}
          <div className="col-md-3">

            <Link to={'/Singlerecipe5'} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '100%', cursor: 'pointer' }} className='shadow border-0  mt-4'>
                <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/10/72/34/01/360_F_1072340103_rXOOQpcPClNfoutZeJeW08PyNpQNDcnO.jpg" style={{ height: '240px' }} className='position-relative ' />
                <button className='position-absolute top-0 end-0 m-3 px-3 btn btn-dark'>Beverage</button>
                <Card.Body>
                  <Card.Title className='fs-3'>Mango Lassi</Card.Title>
                  <Card.Text>
                    Lassi, Mango, Indian, Pakistani, Asian
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush border-0">

                  <ListGroup.Item className='border-0'><span className='text-success'>4.7 </span><FontAwesomeIcon icon={faStar} bounce className='text-success' /> (15)</ListGroup.Item>
                  <ListGroup.Item>Easy <FontAwesomeIcon icon={faSignal} bounce className='text-success' /></ListGroup.Item>

                </ListGroup>

                <div className='mx-3 mt-3 bg-success ' style={{ height: '2px' }} ></div>

                <Card.Body className='d-flex justify-content-between'>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faClock} className='text-success fs-4 pe-2' /> 10 min</Card.Text>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faUser} className='text-success fs-4 pe-1' /> 2 servings</Card.Text>
                </Card.Body>
              </Card>
            </Link>

          </div>


          <div className="col-md-3">

            <Link to={'/Singlerecipe6'} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '100%', cursor: 'pointer' }} className='shadow border-0  mt-4'>
                <Card.Img variant="top" src="https://www.qasralbaharshj.com/wp-content/uploads/2024/11/Dosa-Recipe-3.jpg" style={{ height: '240px' }} className='position-relative ' />
                <button className='position-absolute top-0 end-0 m-3 px-3 btn btn-dark'>Breakfast</button>
                <Card.Body>
                  <Card.Title className='fs-3'>Indian Masala Dosa</Card.Title>
                  <Card.Text>
                    Dosa, Indian, Asian
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush border-0">

                  <ListGroup.Item className='border-0'><span className='text-success'>4.4 </span><FontAwesomeIcon icon={faStar} bounce className='text-success' /> (96)</ListGroup.Item>
                  <ListGroup.Item>Medium <FontAwesomeIcon icon={faSignal} bounce className='text-success' /></ListGroup.Item>

                </ListGroup>

                <div className='mx-3 mt-3 bg-success ' style={{ height: '2px' }} ></div>

                <Card.Body className='d-flex justify-content-between'>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faClock} className='text-success fs-4 pe-2' /> 20 min</Card.Text>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faUser} className='text-success fs-4 pe-1' /> 4 servings</Card.Text>
                </Card.Body>
              </Card>
            </Link>

          </div>

          <div className="col-md-3">

            <Link to={'/Singlerecipe7'} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '100%', cursor: 'pointer' }} className='shadow border-0  mt-4'>
                <Card.Img variant="top" src="https://stewwithsaba.com/wp-content/uploads/2023/04/IMG_9109.jpg" style={{ height: '240px' }} className='position-relative ' />
                <button className='position-absolute top-0 end-0 m-3 px-3 btn btn-dark'>Lunch,Dinner</button>
                <Card.Body>
                  <Card.Title className='fs-3'>Chicken Curry</Card.Title>
                  <Card.Text>
                    Main course, Indian, Pakistani, Asian
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush border-0">

                  <ListGroup.Item className='border-0'><span className='text-success'>4.8 </span><FontAwesomeIcon icon={faStar} bounce className='text-success' /> (68)</ListGroup.Item>
                  <ListGroup.Item>Medium <FontAwesomeIcon icon={faSignal} bounce className='text-success' /></ListGroup.Item>

                </ListGroup>

                <div className='mx-3 mt-3 bg-success ' style={{ height: '2px' }} ></div>

                <Card.Body className='d-flex justify-content-between'>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faClock} className='text-success fs-4 pe-2' /> 20 min</Card.Text>
                  <Card.Text href="#" ><FontAwesomeIcon icon={faUser} className='text-success fs-4 pe-1' /> 4 servings</Card.Text>
                </Card.Body>
              </Card>
            </Link>

          </div>



        </div>
      </div>



    </>
  )
}

export default Recipe