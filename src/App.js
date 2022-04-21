import './App.css';
import Homepage from './components/homepage/Homepage';
import { Routes, Route } from 'react-router-dom'
import Book from './components/book/Book';
import Error from './components/error/Error';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} ></Route>
        <Route path='/book' element={<Book />} ></Route>
        <Route path="/error" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
