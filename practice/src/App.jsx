  import React from 'react';
  import Navbar from './Navbar';

  import { Routes,Route } from 'react-router-dom';
  import Home from './Home';
  import Contact from './Contact';
  import About from './About';
  import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Blog';
import Services from './Services';



  function App() {
    
  /* const DB={
      books:[
        {title:"revolution", author:"chetan bhagat"},
    
        {title:"revolution1", author:"chetan bhagat"},
    
        {title:"Boss", author:"pratik prajapati"}
      ],
    
      songs:[
        {song:"hawayean", singer:"arijit singh"},
        {song:"pehli dafa", singer:"atif aslam"},
      ]
    }
  */
    return (
      <>
    
        
    
      <Navbar/>

  <Routes>
  <Route path="/Home" element={<Home/>}>  </Route>
  <Route path="/Contact" element={<Contact/>}>  </Route>
  
  <Route path='/About' element={<About/>}>  </Route>

 <Route path='/Blog' element={<Blog/>}></Route>

   <Route path='/Services' element={<Services/>}></Route>   
  </Routes>

  
      </>
    )
  }

  export default App




