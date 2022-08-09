import {Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
