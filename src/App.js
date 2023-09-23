import './App.css';
import DiscountPage from './Components/utility/DiscountNav';
import { Route , Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/shop/Home';
import Footer from './Components/Navbar/Footer';
import SignupForm from './Components/Navbar/Signup'
import Login from './Components/Navbar/Login';
import TestLogin from './Components/Navbar/Test';
import Admin from './Components/Admin/Admin';
import Protected from './Components/Protected/Protected';

function App() {
  return (
      <>
        <DiscountPage />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Register' element={<SignupForm />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/auth/input' element={<TestLogin />} />
          <Route path='/auth/admin' element={<Protected Components={Admin}/>} />
        </Routes>
        {/* <Footer /> */}
      </>
  );
}

export default App;
