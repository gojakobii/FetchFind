import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './components/Login';
import FetchFind from './components/FetchFind';
import FavoriteDogs from './components/FavoriteDogs';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/find" element={<FetchFind />}></Route>
            <Route path="/favorites" element={<FavoriteDogs />}></Route>
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

