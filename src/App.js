import './App.css';
import Homepage from './components/homepage/Homepage';
import { Routes, Route } from 'react-router-dom'
import { Book } from './components/book/Book';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} ></Route>
        <Route path='/book' element={<Book />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
