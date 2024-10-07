// import React from 'react'
// import { Route, Routes } from 'react-router-dom';
// import Collection from './pages/Collection';
// import About from './pages/About';
// import Login from './pages/Login';
// import Contact from './pages/Contact';
// import Product from './pages/Product';
// import Orders from './pages/Orders';
// import PlaceOrder from './pages/PlaceOrder';
// import Home from './pages/Home';
// import Navigation from './components/Navigation/Navigation';



// const App = () => {
//   return (
//     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw]'>

//       {/* Fixed Navigation */}
//       <div className="fixed top-0 left-0 w-full z-10 bg-slate-400 h-[80px]">
//         <Navigation />
//       </div>

//       {/* Content with adjusted margin-top */}
//       <div className='mt-[80px]'>
//         <Routes>
//           <Route path='/' element={<Home/>} />
//           <Route path='/collection' element={<Collection />}/>
//           <Route path='/about' element={<About />}/>
//           <Route path='/login' element={<Login />}/>
//           <Route path='/contact' element={<Contact />}/>
//           <Route path='/product' element={<Product />}/>
//           <Route path='/orders' element={<Orders />}/>
//           <Route path='/placeOrder' element={<PlaceOrder />}/>
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Collection from './pages/Collection';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw]">
      {/* Fixed Navigation */}
      
    <div className='left-0'>

      <Navigation />
    </div>
     

      {/* Content with margin-top to account for fixed navbar */}
      <div className="mt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
