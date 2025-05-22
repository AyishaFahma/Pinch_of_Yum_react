import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import { Route, Routes} from 'react-router-dom'
import Recipe from './pages/Recipe'

import Singlerecipe from './pages/Singlerecipe'
import Singlerecipe2 from './pages/Singlerecipe2';
import Singlerecipe3 from './pages/Singlerecipe3';
import Singlerecipe4 from './pages/Singlerecipe4';
import Singlerecipe5 from './pages/Singlerecipe5';
import Singlerecipe6 from './pages/Singlerecipe6';
import Singlerecipe7 from './pages/Singlerecipe7';



function App() {
  

  return (
    <>
      <Header/>

      <Routes>

        <Route  path = '/' element={ <Landing/> } />
        <Route  path='/recipe' element= { <Recipe />} />


        <Route path='/Singlerecipe1' element= { <Singlerecipe />} />
        <Route path='/Singlerecipe2' element= { <Singlerecipe2 />} />
        <Route path='/Singlerecipe3' element= { <Singlerecipe3 />} />
        <Route path='/Singlerecipe4' element= { <Singlerecipe4 />} />
        <Route path='/Singlerecipe5' element= { <Singlerecipe5 />} />
        <Route path='/Singlerecipe6' element= { <Singlerecipe6 />} />
        <Route path='/Singlerecipe7' element= { <Singlerecipe7 />} />


      </Routes>
        
      <Footer/>
    </>
  )
}

export default App
