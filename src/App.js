import './App.css';
import {Lists} from './Lists.js';
import {Details} from './Details.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path='/' exact element={<Lists/>}/>
            <Route path='/details/:id' exact element={<Details/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
