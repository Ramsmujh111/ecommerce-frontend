import './App.css';
import DiscountPage from './Components/utility/DiscountNav';
import { Route , Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/shop/Home';
import Footer from './Components/Navbar/Footer';
import SignupForm from './Components/Navbar/Signup'

function App() {
  return (
      <>
        <DiscountPage />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Register' element={<SignupForm />}/>
        </Routes>
        <Footer />
      </>
  );
}

export default App;
