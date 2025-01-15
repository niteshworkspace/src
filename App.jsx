import { Routes,Route, Link } from 'react-router-dom';
import Input from './Input';
import Home from './Home';
import Show from './Show';
import Manu from './manu';
const App =()=>{
  return(
    <>
   <Manu />
  
  <Routes>
   <Route path="/Home" element={<Home />} />
   <Route path="/Input" element={<Input />} />
   <Route path="/Show" element={<Show />} />

  </Routes>
  

    </>
  )
}

export default App;