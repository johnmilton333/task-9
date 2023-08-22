import './App.css';
import  BasicExample  from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import First1 from "./Section1"
import Second from "./Buffer2"
import Third from './Called'
import Fourth from './Detected'
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <BasicExample/>
        <Routes>
          <Route path="/" element={<First1/>}/>
            <Route path="/career" element={<Second/>}/>
            <Route path="/aboutus" element={<Third/>}/>
            <Route path="/contactus" element={<Fourth/>}/>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
