import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Services from './pages/Services/Services';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import NotFound from './shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
