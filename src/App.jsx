import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/profile';
import Header from './components/Header';


export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/sign_in" element={<SignIn />}/>
    <Route path="/sign_up" element={<SignUp  />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/profile" element={<Profile />}/>
   

    </Routes>
    </BrowserRouter>;
    
  
}
