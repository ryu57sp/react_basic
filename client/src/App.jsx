import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { HelloReact } from './components/HelloReact'
import { CountUpDown } from './components/CountUpDown';
import { Navigation } from './components/Navigation';

export const App = () => {
  return(
    <>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<HelloReact/>}></Route>
          <Route path={'/count-up-down'} element={<CountUpDown/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
