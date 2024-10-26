
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Collection from './pages/Collection';
// import About from './pages/About';
// import Login from './pages/Login';
// import Contact from './pages/Contact';
// import Product from './pages/Product';
// import Orders from './pages/Orders';
// import PlaceOrder from './pages/PlaceOrder';
// import Home from './pages/Home';
// import Navigation from './components/Navigation';
// import Footer from './components/Footer';
// import SearchBar from './components/SearchBar';
// import ScrollTop from './components/ScrollTop';
// import { ToastContainer } from 'react-toastify';

// const App = () => {
//   return (
//     <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw]">
//       <ToastContainer
//         position="top-right"
//         autoClose={3000} // Closes after 3 seconds
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />

//       {/* Fixed Navigation */}
//     <div className='left-0'>

//       <Navigation />
//     </div>
    
//       <SearchBar />
     

//       {/* Content with margin-top to account for fixed navbar */}
//       <div className="mt-[70px]">
//         <ScrollTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/collection" element={<Collection />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/product/:productId" element={<Product />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/placeOrder" element={<PlaceOrder />} />
//         </Routes>

//         <Footer />
      
//       </div>
//     </div>
//   );
// };

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
import SearchBar from './components/SearchBar';
import ScrollTop from './components/ScrollTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import the CSS
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw]">
      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 w-full z-10 bg-slate-400 h-[70px]">
        <Navigation />
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Content with margin-top to account for fixed navbar */}
      <div className="mt-[70px]">
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
