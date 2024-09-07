// import { Routes, Route } from 'react-router-dom';  
import { BrowserRouter, Routes, Route
} from 'react-router-dom'; 
import Home from './Pages/Home/Home';  
import List from './Pages/List/list'
import Hotel from './Pages/Hotel/Hotel';

function App() {  
  return (  
    <div>  
      <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path='/hotels' element={<List />} />
        <Route path= '/hotels/:id' element={<Hotel/>} />
      </Routes>  
      </BrowserRouter>
    </div>  
  );  
}  

export default App;