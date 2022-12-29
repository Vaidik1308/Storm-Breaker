
import './App.css';
import Header from './Header/Header';
import Home from './Main/Home';
import AboutUs from './Main/AboutUs';
import Community from './Main/Community';
import ContactUs from './Main/ContactUs';
import News from './Main/News';
import Missing from './Main/Missing';
import Footer from './Footer/Footer';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/*' element={<Missing/>}/>
      </Routes>
      <hr />

      {/* <Main/> */}
      <Footer/>
    </div>
  );
}

export default App;
