
import './App.css';

import Register from './components/Register';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Statebasics from './components/Statebasics';
import Viewdata from './components/Viewdata';

function App() {
return (
    <div className="App">
      {/*<h1>heloo</h1> */}
      {/*}

      <Navbar/>
      {/* <Routes>
        <Route Path='/reg'element={<Register/>}></Route>
        <Route Path='/u'element={<Statebasics/>}></Route>
        <Route Path='/c' element={<Counter/>}/></Route>
        <Route Path='/i'element={<Use/>}></Route>
                </Routes> */}
        
        <Statebasics/>

        </div>
  );
}

export default App;
