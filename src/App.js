import './App.css';
import { Home } from './components/Home';
import { ProductDetails } from './components/ProductDetails';
import { ContextProvider } from './context/ContextProvider';
import { Routes, Route } from 'react-router-dom';

//here is the routing where we can move to product's details page and product's page on button click
function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/productDetails' element={<ProductDetails />}/>
      </Routes>
    </ContextProvider>
  );
}

export default App;
