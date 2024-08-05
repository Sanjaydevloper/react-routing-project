import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FakestoreIndex } from './fakestore-component/fakestore-index';
import { FakestoreCategories } from './fakestore-component/fakestore-categories';
import { FakestoreProducts } from './fakestore-component/fakestore-products';
import { FakestoreDetails } from './fakestore-component/fakestore-details';
import { FakestoreRatings } from './fakestore-component/fakestore-ratings';
import { Invalid } from './fakestore-component/invalid';


function App() {
  return (
    <div>
      <BrowserRouter>
      <nav className="d-flex justify-content-between p-2 bg-dark text-white">
                <div className="h3">
                    Fakestore.
                </div>
                <div className="fs-4 ">
                    <span className="me-3"> <Link to="/" className="text-decoration-none link-light">Home</Link> </span>
                    <span className="me-3"> <Link to="categories" className="text-decoration-none link-light">Shop</Link> </span>
                    <span className="me-3"> <Link className="text-decoration-none link-light">Contact</Link> </span>
                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-person-fill me-3"></span>
                    <span className="bi bi-cart4"></span>
                </div>
            </nav>
            <Routes>
             <Route path='/' element={<FakestoreIndex />} />  
             <Route path='categories' element={<FakestoreCategories />} />
             <Route path='products/:category' element= { <FakestoreProducts /> } />
             <Route path='details/:id' element={ <FakestoreDetails /> } >
                 <Route path='ratings/:id' element={ <FakestoreRatings /> } />
                 
             </Route>
             <Route  path="invalid"  element={ <Invalid /> } />
           

            </Routes>        
       </BrowserRouter>
    </div>
  );
}

export default App;
